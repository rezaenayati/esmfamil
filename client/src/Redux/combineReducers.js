import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import theme from './theme/reducer';
import room from './room/reducer';

export default combineReducers({
	theme,
	room,
	router: routerReducer,
});
