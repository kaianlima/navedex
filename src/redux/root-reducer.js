import { combineReducers } from "redux"

import DialogReducer from "./dialog/dialog.reducer"
import UserReducer from "./user/user.reducer"
import NaverReducer from "./naver/naver.reducer"

const rootReducer = combineReducers({
  dialog: DialogReducer,
  user: UserReducer,
  naver: NaverReducer,
})

export default rootReducer
