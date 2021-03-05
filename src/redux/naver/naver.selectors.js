import { createSelector } from "reselect"

const selectNaver = (state) => state.naver

export const selectNavers = createSelector(
  [selectNaver],
  (naver) => naver.navers,
)

export const selectIsFetching = createSelector(
  [selectNaver],
  (naver) => naver.isFetching,
)
