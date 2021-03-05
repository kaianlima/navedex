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
