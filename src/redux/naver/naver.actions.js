import NaverActionTypes from "./naver.types"

export const fetchNaversStart = () => ({
  type: NaverActionTypes.FETCH_NAVERS_START,
})

export const fetchNaversSuccess = (navers) => ({
  type: NaverActionTypes.FETCH_NAVERS_SUCCESS,
  payload: navers,
})

export const fetchNaversFailure = (error) => ({
  type: NaverActionTypes.FETCH_NAVERS_FAILURE,
  payload: error,
})

export const setCurrentNaver = (naver) => ({
  type: NaverActionTypes.SET_CURRENT_NAVER,
  payload: naver,
})

export const postNaverStart = (naver) => ({
  type: NaverActionTypes.POST_NAVER_START,
  payload: naver,
})

export const postNaverSuccess = ({ naver, feedback }) => ({
  type: NaverActionTypes.POST_NAVER_SUCCESS,
  payload: { naver, feedback },
})

export const postNaverFailure = (error) => ({
  type: NaverActionTypes.POST_NAVER_FAILURE,
  payload: error,
})

export const putNaverStart = (naver) => ({
  type: NaverActionTypes.PUT_NAVER_START,
  payload: naver,
})

export const putNaverSuccess = ({ naver, feedback }) => ({
  type: NaverActionTypes.PUT_NAVER_SUCCESS,
  payload: { naver, feedback },
})

export const putNaverFailure = (error) => ({
  type: NaverActionTypes.PUT_NAVER_FAILURE,
  payload: error,
})

export const deleteNaverStart = (naverId) => ({
  type: NaverActionTypes.DELETE_NAVER_START,
  payload: naverId,
})

export const deleteNaverSuccess = (feedback) => ({
  type: NaverActionTypes.DELETE_NAVER_SUCCESS,
  payload: feedback,
})

export const deleteNaverFailure = (error) => ({
  type: NaverActionTypes.DELETE_NAVER_FAILURE,
  payload: error,
})
