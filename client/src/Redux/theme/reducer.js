export default (
	state = {
		toastError: {
			isOpen: false,
			message: '',
		},
		redirectTo: '',
		loading: false,

		local: 'fa',
		toastInfo: {
			isOpen: false,
			message: '',
		},
	},
	action,
) => {
	switch (action.type) {
		case 'TOGGLE_TOAST_ERROR':
			return {
				...state,
				toastError: {
					...state.toastError,
					isOpen: !state.toastError.isOpen,
				},
			};
		case 'CLOSE_TOAST_ERROR':
			return {
				...state,
				toastError: {
					isOpen: false,
					message: '',
				},
			};
		case 'OPEN_TOAST_ERROR':
			return {
				...state,
				toastError: {
					isOpen: true,
					message: action.message,
				},
			};
		case 'SET_REDIRECT_TO':
			return {
				...state,
				redirectTo: action.redirectTo,
			};
		case 'CHANGE_LOADING':
			return {
				...state,
				loading: action.loading,
			};

		case 'CHANGE_LOCAL':
			return {
				...state,
				local: 'fa',
			};
		case 'TOGGLE_TOAST_INFO':
			return {
				...state,
				toastInfo: {
					...state.toastInfo,
					isOpen: !state.toastInfo.isOpen,
				},
			};
		case 'CLOSE_TOAST_INFO':
			return {
				...state,
				toastInfo: {
					isOpen: false,
					message: '',
				},
			};
		case 'OPEN_TOAST_INFO':
			return {
				...state,
				toastInfo: {
					isOpen: true,
					message: action.message,
				},
			};
		default:
			return state;
	}
};
