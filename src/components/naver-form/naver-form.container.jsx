import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"

import { selectIsFetchingDetail } from "../../redux/naver/naver.selectors"
import WithSpinner from "../with-spinner/with-spinner"
import NaverForm from "./naver-form"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsFetchingDetail(state),
})

const NaverFormContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(NaverForm)

export default NaverFormContainer
