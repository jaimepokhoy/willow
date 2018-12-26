import { put, takeLatest, call } from 'redux-saga/effects';
import { NEXT_ROUND, REQUEST_SUCCESS, REQUEST_PEOPLE, CHANGE_MODE, REQUEST_ERROR, nextRound } from './../actions';
import axios from 'axios';

function fetchPeople() {
    return axios({
        method: 'get',
        url: 'https://willowtreeapps.com/api/v1.0/profiles'
    });
}

function* getPeople() {
    try {
        const response = yield call(fetchPeople);
        const people = response.data;

        yield put({ type: REQUEST_SUCCESS, people });
        yield put({ type: NEXT_ROUND });
    } catch (error) {
        yield put({ type: REQUEST_ERROR, error });
    }
}

function* changeMode() {
    yield put(nextRound());
}

export default function* watcherSaga() {
    yield takeLatest(REQUEST_PEOPLE, getPeople);
    yield takeLatest(CHANGE_MODE, changeMode);
}