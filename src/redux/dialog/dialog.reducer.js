import DialogActionTypes from "./dialog.types"

const INITIAL_STATE = {
  trip: {
    open: false,
  },
  naverDelete: {
    open: false,
  },
  naverDetail: {
    open: false,
  },
  naverFeedback: {
    open: false,
  },
}

const DialogReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case DialogActionTypes.TOGGLE_TRIP_DIALOG:
      return {
        ...state,
        trip: {
          open: !state.trip.open,
        },
      }
    case DialogActionTypes.TOGGLE_NAVER_DELETE_DIALOG:
      return {
        ...state,
        naverDelete: {
          open: !state.naverDelete.open,
        },
      }
    case DialogActionTypes.TOGGLE_NAVER_DETAIL_DIALOG:
      return {
        ...state,
        naverDetail: {
          open: !state.naverDetail.open,
        },
      }
    case DialogActionTypes.TOGGLE_NAVER_FEEDBACK_DIALOG:
      return {
        ...state,
        naverFeedback: {
          open: !state.naverFeedback.open,
        },
      }
    default:
      return state
  }
}

export default DialogReducer
