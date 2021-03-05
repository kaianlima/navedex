import UserActionTypes from "./user.types"

const INITIAL_STATE = {
  currentUser: null,
  isAuthenticated: false,
  error: null,
}

const UserReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        isAuthenticated: true,
        error: null,
      }
    case UserActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        isAuthenticated: false,
        error: null,
      }
    case UserActionTypes.LOGIN_FAILURE:
    case UserActionTypes.LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default UserReducer
