import UserActionTypes from "./user.types"

export const loginStart = (emailAndPassword) => ({
  type: UserActionTypes.LOGIN_START,
  payload: emailAndPassword,
})

export const loginSuccess = (user) => ({
  type: UserActionTypes.LOGIN_SUCCESS,
  payload: user,
})

export const loginFailure = (error) => ({
  type: UserActionTypes.LOGIN_FAILURE,
  payload: error,
})

export const logoutStart = () => ({
  type: UserActionTypes.LOGOUT_START,
})

export const logoutSuccess = () => ({
  type: UserActionTypes.LOGOUT_SUCCESS,
})

export const logoutFailure = (error) => ({
  type: UserActionTypes.LOGOUT_FAILURE,
  payload: error,
})
