import { takeLatest, put, all, call } from "redux-saga/effects"

import UserActionTypes from "./user.types"

import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
} from "./user.actions"
import { postUserLogin, removeBearerToken } from "../../services/api"

export function* login({ payload: { email, password } }) {
  const user = yield postUserLogin(email, password)

  try {
    yield put(loginSuccess(user))
  } catch (error) {
    yield put(loginFailure(error))
  }
}

export function* isUserAuthenticated() {
  try {
  } catch (error) {
    yield put(loginFailure(error))
  }
}

export function* logout() {
  try {
    removeBearerToken()
    yield put(logoutSuccess())
  } catch (error) {
    yield put(logoutFailure(error))
  }
}

export function* onLoginStart() {
  yield takeLatest(UserActionTypes.LOGIN_START, login)
}

export function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated)
}

export function* onLogoutStart() {
  yield takeLatest(UserActionTypes.LOGOUT_START, logout)
}

export function* userSagas() {
  yield all([call(onLoginStart), call(onCheckUserSession), call(onLogoutStart)])
}
