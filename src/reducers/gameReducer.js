const gameReducer = (state = [], action) => {
    switch(action.type) {
        case 'SELECT':
            return state.concat([action.data]);
        default:
            return state;
    }
}

export default gameReducer;