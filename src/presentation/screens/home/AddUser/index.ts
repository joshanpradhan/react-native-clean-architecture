import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";
import AddUser from "./AddUser";
import { addUserStart } from "./redux/actions";

const mapStateToProps = createStructuredSelector({
	data: (state) => state.login,
});
const mapDispatchToProps = (dispatch) => {
	return {
		addUserStart: (values) => dispatch(addUserStart(values))
	}
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(AddUser);
