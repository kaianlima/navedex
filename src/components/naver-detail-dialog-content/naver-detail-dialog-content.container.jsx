import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"

import { selectIsFetchingDetail } from "../../redux/naver/naver.selectors"
import WithSpinner from "../with-spinner/with-spinner"
import NaverDetailDialogContent from "./naver-detail-dialog-content"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsFetchingDetail(state),
})

const NaverDetailDialogContentContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(NaverDetailDialogContent)

export default NaverDetailDialogContentContainer
