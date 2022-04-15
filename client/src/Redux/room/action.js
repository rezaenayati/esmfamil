const setRoom = (room) => ({ type: 'SET_ROOM_INFO', room });

export const saveRoom = (room) => (dispatch) => dispatch(setRoom(room));
