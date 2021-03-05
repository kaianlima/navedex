import DialogActionTypes from "./dialog.types"

const INITIAL_STATE = {
  trip: {
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
    default:
      return state
  }
}

export default DialogReducer
