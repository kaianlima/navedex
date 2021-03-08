import DialogActionTypes from "./dialog.types"

export const toggleTripDialog = () => ({
  type: DialogActionTypes.TOGGLE_TRIP_DIALOG,
})

export const toggleNaverDeleteDialog = (naverId) => ({
  type: DialogActionTypes.TOGGLE_NAVER_DELETE_DIALOG,
  payload: naverId,
})

export const toggleNaverDetailDialog = (naver) => ({
  type: DialogActionTypes.TOGGLE_NAVER_DETAIL_DIALOG,
  payload: naver,
})

export const toggleNaverFeedbackDialog = () => ({
  type: DialogActionTypes.TOGGLE_NAVER_FEEDBACK_DIALOG,
})
