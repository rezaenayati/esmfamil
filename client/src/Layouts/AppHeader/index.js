import { connect } from "react-redux";

import View from "./view";
import { changeLocal } from "../../Redux/theme/action";

const mapStateToProps = (state) => ({
  ...state,
  local: state.theme.local,
});

const mapDispatchToProps = (dispatch) => ({
  changeLocal: (local) => changeLocal(local)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
