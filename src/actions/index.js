/*
 * action types
 */

export const SHOW_LOADING = 'SHOW_LOADING'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_PEOPLE = 'REQUEST_PEOPLE'
export const REQUEST_ERROR = 'REQUEST_ERROR'

/*
 * action creators
 */

export function addTodo(text) {
    return {
        type: SHOW_LOADING,
        text
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: REQUEST_PEOPLE,
        filter
    }
}