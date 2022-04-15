/* eslint-disable no-undef */
import Axios from 'axios';

import { store } from '../Redux/store';
import Config from '../Config';
// eslint-disable-next-line import/no-cycle

const api = Axios.create({
	baseURL: Config.apiBaseUrl,
	timeout: 0,
	headers: {
		'Content-Type': 'application/json',
	},
});

const authInterceptor = (config) => {
	const state = store.getState();
	if (token) {
		// eslint-disable-next-line no-param-reassign
	}

	return config;
};

api.interceptors.request.use(authInterceptor);

const errorInterceptor = (error) => {
	if (!error.response) {
		return Promise.reject({
			response: { data: { message: 'something went wrong' } },
		});
	}

	switch (error.response.status) {
		case 401:
			console.error(error.response.status, error.message);
			break;

		case 404:
			console.log('404');
			break;

		case 500:
			console.log('500');
			break;

		default: {
			console.error(error.response.status, error.message);
		}
	}

	return Promise.reject(error);
};

const responseInterceptor = (response) => response;

api.interceptors.response.use(responseInterceptor, errorInterceptor);

const axios = (config) =>
	new Promise((resolve, reject) => {
		api(config)
			.then((response) => resolve(response.data))
			.catch((error) => reject(error.response));
	});

export default axios;
