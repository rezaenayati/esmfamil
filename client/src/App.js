import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import Routes from './Routes';
import socket from './Socket';

class App extends React.Component {
	componentDidMount() {
		socket.connectSocket();
		if (!sessionStorage.getItem('userId')) {
			const userId = uuid();
			sessionStorage.setItem('userId', userId);
		}
		console.log(sessionStorage.getItem('userId'));
	}

	render() {
		const { isAuthenticated, local } = this.props;
		return (
			<div dir="rtl">
				{local}
				<Router basename="/">
					<Routes isAuthenticated={isAuthenticated} />
				</Router>
			</div>
		);
	}
}

App.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired,
	accessExp: PropTypes.number.isRequired,
	local: PropTypes.string.isRequired,
	logout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
	...state,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
