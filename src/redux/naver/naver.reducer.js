import NaverActionTypes from "./naver.types"

const INITIAL_STATE = {
  currentNaver: null,
  feedback: null,
  navers: null,
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
        navers: action.payload,
        isAuthenticated: false,
        error: null,
      }
    case NaverActionTypes.FETCH_NAVERS_FAILURE:
    case NaverActionTypes.POST_NAVER_FAILURE:
    case NaverActionTypes.PUT_NAVER_FAILURE:
    case NaverActionTypes.DELETE_NAVER_FAILURE:
      return {
        ...state,
        error: action.payload,
      }
    case NaverActionTypes.SET_CURRENT_NAVER:
    case NaverActionTypes.POST_NAVER_START:
    case NaverActionTypes.PUT_NAVER_START:
      return {
        ...state,
        currentNaver: action.payload,
      }
    case NaverActionTypes.POST_NAVER_SUCCESS:
    case NaverActionTypes.PUT_NAVER_SUCCESS:
    case NaverActionTypes.DELETE_NAVER_SUCCESS:
      return {
        ...state,
        feedback: {
          title: action.payload.title,
          content: action.payload.content,
        },
        error: null,
      }
    default:
      return state
  }
}

export default NaverReducer
