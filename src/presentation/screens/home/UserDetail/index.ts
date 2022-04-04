import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import UserDetail from "./UserDetail";
import { userDetailStart } from "./redux/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.userDetail,
});
const mapDispatchToProps = (dispatch) => {
	return {
		userDetailStart: (values) => dispatch(userDetailStart(values)),
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(UserDetail);
