import { connect } from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect"

import { selectIsFetching } from "../../redux/naver/naver.selectors"
import WithSpinner from "../with-spinner/with-spinner"
import NaversOverview from "./navers-overview"

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => selectIsFetching(state),
})

const NaversOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(NaversOverview)

export default NaversOverviewContainer
