import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = (state) => ({
	...state,
	room: state.room.info,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(View);
