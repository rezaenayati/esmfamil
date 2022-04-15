const toggleToastError = () => ({ type: 'TOGGLE_TOAST_ERROR' });
const openToastError = (message) => ({ type: 'OPEN_TOAST_ERROR', message });
const setRedirectTo = (redirectTo) => ({ type: 'SET_REDIRECT_TO', redirectTo });
const setLoading = (loading) => ({ type: 'CHANGE_LOADING', loading });
const setLocal = (local) => ({ type: 'CHANGE_LOCAL', local });
const closeToastError = () => ({ type: 'CLOSE_TOAST_ERROR' });
const toggleToastInfo = () => ({ type: 'TOGGLE_TOAST_INFO' });
const openToastInfo = (message) => ({ type: 'OPEN_TOAST_INFO', message });
const closeToastInfo = () => ({ type: 'CLOSE_TOAST_INFO' });

export const toggleErrorToast = () => (dispatch) => dispatch(toggleToastError());
export const openErrorToast = (message) => (dispatch) => {
    dispatch(openToastError(message));
    setTimeout(() => dispatch(closeToastError()), 3000);
};
export const redirect = (redirectTo) => (dispatch) => dispatch(setRedirectTo(redirectTo));
export const changeLoading = (loading) => (dispatch) => dispatch(setLoading(loading));
export const changeLocal = (local) => (dispatch) => dispatch(setLocal(local));
export const toggleInfoToast = () => (dispatch) => dispatch(toggleToastInfo());
export const openInfoToast = (message) => (dispatch) => {
    dispatch(openToastInfo(message));
    setTimeout(() => dispatch(closeToastInfo()), 3000);
};
