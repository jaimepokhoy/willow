import { REQUEST_SUCCESS, REQUEST_PEOPLE, SELECT_PERSON, NEXT_ROUND } from './../actions';
import shuffle from 'lodash/shuffle';
import random from 'lodash/random';

const initialState = {
    people: [],
    hand: [],
    currPag: 0,
    isWon: false,
    target: null
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case SELECT_PERSON: {
            const { target, hand } = state;
            const { person: selected } = action;
            let isWon = false;
            let updatedHand;

            if (selected.id === target.id) {
                isWon = true;
            }

            updatedHand = hand.map(person => {
                if (person.id === selected.id) {
                    return Object.assign({}, person, {
                        clicked: true
                    })
                } else {
                    return person;
                }

            });

            return { ...state,
                hand: updatedHand,
                isWon
            };
        }
        case REQUEST_PEOPLE:
            return { ...state, fetching: true, error: null }
        case REQUEST_SUCCESS:
            return { ...state,
                fetching: false,
                people: action.people,
            };
        case NEXT_ROUND: {
            const { currPag, people } = state;
            const start = currPag * 5 || 1;
            const end = start + 5;
            const hand = shuffle(people.slice(start, end));

            return { ...state,
                hand,
                currPag: state.currPag++,
                target: people.slice(start, end)[random(4)]
            }
        }
        default:
            return state;
    }
}

export default gameReducer;