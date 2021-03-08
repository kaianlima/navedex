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

export const selectNaverDeleteDialog = createSelector(
  [selectDialog],
  (dialog) => dialog.naverDelete,
)

export const selectNaverDeleteDialogOpen = createSelector(
  [selectNaverDeleteDialog],
  (naverDelete) => naverDelete.open,
)

export const selectNaverDetailDialog = createSelector(
  [selectDialog],
  (dialog) => dialog.naverDetail,
)

export const selectNaverDetailDialogOpen = createSelector(
  [selectNaverDetailDialog],
  (naverDetail) => naverDetail.open,
)

export const selectNaverFeedbackDialog = createSelector(
  [selectDialog],
  (dialog) => dialog.naverFeedback,
)

export const selectNaverFeedbackDialogOpen = createSelector(
  [selectNaverFeedbackDialog],
  (naverFeedback) => naverFeedback.open,
)
