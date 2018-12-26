import { REQUEST_SUCCESS, REQUEST_PEOPLE, SELECT_PERSON, NEXT_ROUND, CHANGE_MODE, GIVE_HINT } from './../actions';
import shuffle from 'lodash/shuffle';
import random from 'lodash/random';

const initialState = {
    people: [],
    hand: [],
    currPag: 0,
    isWon: false,
    target: null,
    loading: false,
    gameMode: 'Classic',
    gameModes: [
        'Classic',
        'Hint',
        'Mat(*)',
        'Hard',
        'Team'
    ]
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PERSON: {
            const { target, hand } = state;
            const { person: selected } = action;
            let isWon = false;

            if (selected.id === target.id) {
                isWon = true;
            }

            const updatedHand = hand.map(person => {
                if (person.id === selected.id && person.id === target.id) {
                    return Object.assign({}, person, {
                        clicked: true,
                        isTarget: true
                    })
                } else if (person.id === selected.id) {
                    return Object.assign({}, person, {
                        clicked: true
                    })
                } else {
                    return person;
                }

            });

            return { ...state,
                timer: 0,
                hand: updatedHand,
                isWon
            };
        }
        case REQUEST_PEOPLE:
            return { ...state, loading: true, error: null }
        case REQUEST_SUCCESS:
            return { ...state,
                loading: false,
                people: action.people,
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
            return { ...state,
                gameMode: action.mode
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