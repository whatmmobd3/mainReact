/* eslint-disable require-yield */
import { takeEvery } from "redux-saga/effects";
import { IMAGES } from "../constants";

function* handleImagesLoad() {
  console.log("fetch images");
}

// watcher
function* rootSaga() {
  yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}

export default rootSaga;

// watcher saga --> action --> worker saga
