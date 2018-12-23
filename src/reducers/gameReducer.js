const gameReducer = (state = [], action) => {
    switch(action.type) {
        case 'SELECT':
            return state.concat([action.data]);
        case 'REQUEST_PEOPLE':
        case 'RECEIVE_PEOPLE':
        default:
            return state;
    }
}

export default gameReducer;