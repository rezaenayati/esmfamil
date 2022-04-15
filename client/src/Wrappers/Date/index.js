import { connect } from 'react-redux';

import View from './view';

const mapStateToProps = (state) => ({
    ...state,
    local: state.theme.local,
});

const mapDispatchToProps = () => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(View);
