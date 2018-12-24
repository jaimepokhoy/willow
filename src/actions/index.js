/*
 * action types
 */

export const SHOW_LOADING = 'SHOW_LOADING'
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS'
export const REQUEST_PEOPLE = 'REQUEST_PEOPLE'
export const REQUEST_ERROR = 'REQUEST_ERROR'
export const SELECT_PERSON = 'SELECT_PERSON'
export const NEXT_ROUND = 'NEXT_ROUND'
export const CHANGE_MODE = 'CHANGE_MODE'

/*
 * action creators
 */

export function makeSelection(person) {
    return {
        type: SELECT_PERSON,
        person
    }
}

export function nextRound() {
    return {
        type: NEXT_ROUND
    }
}

export function modeChange() {
    return {
        type: CHANGE_MODE
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: REQUEST_PEOPLE,
        filter
    }
}