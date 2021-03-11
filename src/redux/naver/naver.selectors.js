import { createSelector } from "reselect"

const selectNaver = (state) => state.naver

export const selectNavers = createSelector(
  [selectNaver],
  (naver) => naver.navers,
)

export const selectFeedback = createSelector(
  [selectNaver],
  (naver) => naver.feedback,
)

export const selectIsFetching = createSelector(
  [selectNaver],
  (naver) => naver.isFetching,
)
export const selectIsFetchingDetail = createSelector(
  [selectNaver],
  (naver) => naver.isFetchingDetail,
)

export const selectCurrentNaver = createSelector(
  [selectNaver],
  (naver) => naver.currentNaver,
)

export const selectNaversForOverview = createSelector(
  [selectNavers],
  (navers) => (navers ? Object.keys(navers).map((key) => navers[key]) : []),
)
