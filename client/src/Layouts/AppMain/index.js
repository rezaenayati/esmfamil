import { connect } from "react-redux";

import View from "./view";
import { toggleErrorToast, toggleInfoToast } from "../../Redux/theme/action";

const mapStateToProps = (state) => ({
  ...state,
  toastError: state.theme.toastError,
  toastInfo: state.theme.toastInfo,
  openLoading: state.theme.loading,
  local: state.theme.local,
});

const mapDispatchToProps = (dispatch) => ({
  toggleToastError: () => toggleErrorToast()(dispatch),
  toggleToastInfo: () => toggleInfoToast()(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
