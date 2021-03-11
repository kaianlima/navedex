import NaverActionTypes from "./naver.types"

const INITIAL_STATE = {
  currentNaver: null,
  feedback: null,
  navers: null,
  isFetching: false,
  isFetchingDetail: false,
  error: null,
}

const NaverReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NaverActionTypes.FETCH_NAVERS_START:
      return {
        ...state,
        isFetching: true,
      }
    case NaverActionTypes.FETCH_NAVER_DETAIL_START:
      return {
        ...state,
        isFetchingDetail: true,
      }
    case NaverActionTypes.FETCH_NAVERS_SUCCESS:
      return {
        ...state,
        navers: action.payload,
        isFetching: false,
        error: null,
      }
    case NaverActionTypes.FETCH_NAVER_DETAIL_SUCCESS:
      return {
        ...state,
        currentNaver: action.payload,
        isFetchingDetail: false,
        error: null,
      }
    case NaverActionTypes.FETCH_NAVERS_FAILURE:
    case NaverActionTypes.FETCH_NAVER_DETAIL_FAILURE:
    case NaverActionTypes.POST_NAVER_FAILURE:
    case NaverActionTypes.PUT_NAVER_FAILURE:
    case NaverActionTypes.DELETE_NAVER_FAILURE:
      return {
        ...state,
        isFetching: false,
        isFetchingDetail: false,
        error: action.payload,
      }
    case NaverActionTypes.SET_CURRENT_NAVER:
      return {
        ...state,
        currentNaver: action.payload,
      }
    case NaverActionTypes.POST_NAVER_SUCCESS:
    case NaverActionTypes.PUT_NAVER_SUCCESS:
      return {
        ...state,
        currentNaver: action.payload.naver,
        feedback: {
          title: action.payload.feedback.title,
          content: action.payload.feedback.content,
        },
        error: null,
      }
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
