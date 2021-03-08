import { all, call } from "redux-saga/effects"

import { dialogSagas } from "./dialog/dialog.sagas"
import { userSagas } from "./user/user.sagas"
import { naverSagas } from "./naver/naver.sagas"

export default function* rootSaga() {
  yield all([call(dialogSagas), call(userSagas), call(naverSagas)])
}
