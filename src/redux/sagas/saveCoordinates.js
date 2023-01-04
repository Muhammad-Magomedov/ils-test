import {all, put, call, takeEvery} from "redux-saga/effects";

export default function* saveCoordinateSaga() {
    yield takeEvery("SAVE_COORDINATE", )
}

function* saveCoordinate(action) {
    try {
        const postResponse = yield call()
    } catch(err) {
        console.log(err);
    }
}