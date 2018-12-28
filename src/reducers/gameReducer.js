import { REQUEST_SUCCESS, REQUEST_PEOPLE, SELECT_PERSON, NEXT_ROUND, CHANGE_MODE, GIVE_HINT, REQUEST_ERROR } from './../actions';
import shuffle from 'lodash/shuffle';
import random from 'lodash/random';
import { getRandomPerson } from '../helpers';

const initialState = {
    people: [],
    hand: [],
    currPag: 0,
    isWon: false,
    target: null,
    loading: false,
    gameMode: 'Classic',
    gameModes: [
        {
            name: 'Classic',
            desc: 'Name says it all'
        }, {
            name: 'Hint',
            desc: 'Incorrect options will disappear after 5 seconds'
        }, {
            name: 'Mat(*)',
            desc: 'Show only Mat*\'s'
        }, {
            name: 'Team',
            desc: 'Show only current team members'
        }, {
            name: 'Reversed',
            desc: 'Show a single picture, and choose from 5 names'
        }, {
            name: 'Hard',
            desc: 'Incorrect selections are replaced by another incorrect option, then shuffled'
        }
    ]
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PERSON: {
            const { target, hand, isWon, people, gameMode } = state;
            const { person: selected } = action;
            let random = {};
            let updatedIsWon = isWon;

            if (isWon) return state;            

            if (selected.id === target.id) {
                updatedIsWon = true;
            }

            let updatedHand = hand.map(person => {
                if (person.id === selected.id && person.id === target.id) {
                    return Object.assign({}, person, {
                        clicked: true,
                        isTarget: true
                    })
                } else if (person.id === selected.id) {
                    if (gameMode=== 'Hard') random = getRandomPerson(people, hand, target);

                    return Object.assign({}, person, {
                        clicked: true
                    }, random);
                } else {
                    return person;
                }

            });

            if (gameMode === 'Hard' && !updatedIsWon) updatedHand = shuffle(updatedHand);

            return { ...state,
                timer: 0,
                hand: updatedHand,
                isWon: updatedIsWon
            };
        }
        case REQUEST_PEOPLE:
            return { ...state, loading: true, error: null }
        case REQUEST_SUCCESS:
            return { ...state,
                loading: false,
                people: action.people,
            };
        case REQUEST_ERROR:
            return { ...state,
                loading: false,
                error: action.error
            };
        case NEXT_ROUND: {
            const { currPag, people } = state;
            const start = currPag * 5;
            const end = start + 5;
            const hand = shuffle(people.slice(start, end)).map(person => Object.assign(person, { visible: true }));

            return { ...state,
                hand,
                isWon: false,
                currPag: currPag + 1,
                target: people.slice(start, end)[random(4)]
            }
        }
        case CHANGE_MODE: {
            const { mode } = action;
            const { people } = state;

            let newPeople = [...people];

            if (mode === 'Team') {
                newPeople = people.filter(person => person.jobTitle);
            } else if (mode === 'Mat(*)') {
                newPeople = people.filter(person => person.firstName.startsWith('Mat'));
            }

            return { ...state,
                gameMode: action.mode,
                people: newPeople,
                currPag: 0
            };
        }
        case GIVE_HINT: {
            const { hand, target, gameMode } = state;
            const tempHand = [...hand];

            if (gameMode !== 'Hint') return state;

            for (let i = 0; i < 5; i++) {
                if (tempHand[i].visible && tempHand[i].id !== target.id) {
                    tempHand[i].visible = false;
                    break;
                }
            }

            return { ...state, 
                hand: tempHand
            };
        }
        default:
            return state;
    }
}

export default gameReducer;