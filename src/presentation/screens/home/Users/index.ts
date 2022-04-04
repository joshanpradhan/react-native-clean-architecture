import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import  Users  from "./Users";
import { userListStart } from "./redux/actions";

const mapStateToProps = createStructuredSelector({
  data: (state) => state.userDetail,
});
const mapDispatchToProps = (dispatch) => {
  return {
    userListStart: (values) => dispatch(userListStart(values)),
  };
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Users);
