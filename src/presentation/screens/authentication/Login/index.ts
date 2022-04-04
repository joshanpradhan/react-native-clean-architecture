import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import Login from "./Login";
import { loginStart } from "./redux/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		loginStart: (values) => dispatch(loginStart(values))
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Login);
