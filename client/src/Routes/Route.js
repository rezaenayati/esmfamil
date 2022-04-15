import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';

const RouteWrapper = ({ component: Component, isPrivate, isAuthenticated, ...rest }) => {
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <Route {...rest} component={Component} />;
};

RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
	isAuthenticated: PropTypes.bool,
};

RouteWrapper.defaultProps = {
	isPrivate: false,
	isAuthenticated: false,
};

export default RouteWrapper;
