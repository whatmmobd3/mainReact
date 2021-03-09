/* eslint-disable require-yield */
import { takeEvery, put } from "redux-saga/effects";

function* workerSaga() {
  console.log("Hey from worker");
  console.log(put({ type: "ACTION_FROM_WOKER" }));
  yield put({ type: "ACTION_FROM_WOKER" });
}

// watcher
function* rootSaga() {
  yield takeEvery("HELLO", workerSaga);
}

export default rootSaga;

// watcher saga --> action --> worker saga
