import { takeLatest, put, all, call } from "redux-saga/effects"

import DialogActionTypes from "../dialog/dialog.types"
import NaverActionTypes from "./naver.types"

import {
  fetchNaversSuccess,
  fetchNaversFailure,
  setCurrentNaver,
  postNaverSuccess,
  postNaverFailure,
  putNaverSuccess,
  putNaverFailure,
  deleteNaverSuccess,
  deleteNaverFailure,
} from "./naver.actions"
import {
  fetchNavers,
  postNaver,
  putNaver,
  deleteNaver,
} from "../../services/api"

export function* fetchNaversAsync() {
  const navers = yield fetchNavers()

  try {
    yield put(fetchNaversSuccess(navers))
  } catch (error) {
    yield put(fetchNaversFailure(error))
  }
}

export function* setCurrentNaverAfterDetailDialog({ payload }) {
  if (payload) {
    yield put(setCurrentNaver(payload))
  }
}

export function* postNaverAsync({ payload }) {
  const { naver, feedback } = yield postNaver(payload)
  console.log(naver)
  console.log(feedback)
  try {
    yield put(postNaverSuccess({ naver, feedback }))
  } catch (error) {
    yield put(postNaverFailure(error))
  }
}

export function* putNaverAsync({ payload }) {
  const { naver, feedback } = yield putNaver(payload)
  console.log(naver)
  console.log(feedback)
  try {
    yield put(putNaverSuccess({ naver, feedback }))
  } catch (error) {
    yield put(putNaverFailure(error))
  }
}

export function* deleteNaverAsync({ payload }) {
  const feedback = yield deleteNaver(payload)

  try {
    yield put(deleteNaverSuccess(feedback))
  } catch (error) {
    yield put(deleteNaverFailure(error))
  }
}

export function* onFetchNaversStart() {
  yield takeLatest(NaverActionTypes.FETCH_NAVERS_START, fetchNaversAsync)
}

export function* onToggleNaverDetailDialog() {
  yield takeLatest(
    DialogActionTypes.TOGGLE_NAVER_DETAIL_DIALOG,
    setCurrentNaverAfterDetailDialog,
  )
}

export function* onPostNaverStart() {
  yield takeLatest(NaverActionTypes.POST_NAVER_START, postNaverAsync)
}

export function* onPutNaverStart() {
  yield takeLatest(NaverActionTypes.PUT_NAVER_START, putNaverAsync)
}

export function* onDeleteNaverStart() {
  yield takeLatest(NaverActionTypes.DELETE_NAVER_START, deleteNaverAsync)
}

export function* onPutNaverSuccess() {
  yield takeLatest(NaverActionTypes.PUT_NAVER_SUCCESS, fetchNaversAsync)
}

export function* onDeleteNaverSuccess() {
  yield takeLatest(NaverActionTypes.DELETE_NAVER_SUCCESS, fetchNaversAsync)
}

export function* naverSagas() {
  yield all([
    call(onFetchNaversStart),
    call(onToggleNaverDetailDialog),
    call(onPostNaverStart),
    call(onPutNaverStart),
    call(onDeleteNaverStart),
    call(onPutNaverSuccess),
    call(onDeleteNaverSuccess),
  ])
}
