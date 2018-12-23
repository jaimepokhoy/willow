/*
 * action types
 */

export const SHOW_LOADING = 'SHOW_LOADING'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const GET_PEOPLE = 'GET_PEOPLE'

/*
 * action creators
 */

export function addTodo(text) {
    return {
        type: SHOW_LOADING,
        text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: GET_PEOPLE,
        filter
    }
}