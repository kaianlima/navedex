import { createSelector } from "reselect"

export const selectDialog = (state) => state.dialog

export const selectTripDialog = createSelector(
  [selectDialog],
  (dialog) => dialog.trip,
)

export const selectTripDialogOpen = createSelector(
  [selectTripDialog],
  (trip) => trip.open,
)
