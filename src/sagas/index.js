import { put, takeLatest, call } from 'redux-saga/effects';
import { SHOW_LOADING, REQUEST_SUCCESS, REQUEST_PEOPLE, REQUEST_ERROR } from './../actions';
import axios from 'axios';

function fetchPeople() {
    return axios({
        method: 'get',
        url: 'https://willowtreeapps.com/api/v1.0/profiles'
    });
}

function* getPeople() {
    // yield put(SHOW_LOADING, { isLoading: true });
    try {
        const response = yield call(fetchPeople);
        const people = response.data;

        yield put({ type: REQUEST_SUCCESS, people });
    } catch (error) {
        yield put({ type: REQUEST_ERROR, error });
    }
}

export default function* watcherSaga() {
    yield takeLatest(REQUEST_PEOPLE, getPeople);
}