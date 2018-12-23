import { REQUEST_SUCCESS, REQUEST_PEOPLE } from './../actions';

const initialState = {
    people: []
}

const gameReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'SELECT':
            return state.concat([action.data]);
        case REQUEST_PEOPLE:
            return { ...state, fetching: true, error: null }
        case REQUEST_SUCCESS:
            return { ...state, fetching: false, people: action.people };
        default:
            return state;
    }
}

export default gameReducer;