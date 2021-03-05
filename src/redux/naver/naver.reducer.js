import NaverActionTypes from "./naver.types"

const INITIAL_STATE = {
  navers: [],
  isFetching: false,
  error: null,
}

const NaverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NaverActionTypes.FETCH_NAVERS_START:
      return {
        ...state,
        isFetching: true,
      }
    case NaverActionTypes.FETCH_NAVERS_SUCCESS:
      return {
        ...state,
        navers: [...state.navers, action.payload],
        isAuthenticated: false,
        error: null,
      }
    case NaverActionTypes.FETCH_NAVERS_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    default:
      return state
  }
}

export default NaverReducer
