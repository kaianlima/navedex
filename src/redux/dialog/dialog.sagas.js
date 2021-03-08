import { takeLatest, put, all, call } from "redux-saga/effects"

import NaverActionTypes from "../naver/naver.types"

import { toggleNaverFeedbackDialog } from "./dialog.actions"

export function* toggleNaverFeedbackDialogAfterSuccess() {
  yield put(toggleNaverFeedbackDialog)
}

export function* onCreateNaver() {
  yield takeLatest(
    NaverActionTypes.POST_NAVER_SUCCESS,
    toggleNaverFeedbackDialogAfterSuccess,
  )
}

export function* onEditNaver() {
  yield takeLatest(
    NaverActionTypes.PUT_NAVER_SUCCESS,
    toggleNaverFeedbackDialogAfterSuccess,
  )
}

export function* onDeleteNaver() {
  yield takeLatest(
    NaverActionTypes.DELETE_NAVER_SUCCESS,
    toggleNaverFeedbackDialogAfterSuccess,
  )
}

export function* dialogSagas() {
  yield all([call(onCreateNaver), call(onEditNaver), call(onDeleteNaver)])
}
