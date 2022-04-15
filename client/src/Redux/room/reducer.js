export default (
	state = {
		info: {
			id: 'roomId',
			hostId: '',
			status: 'inited',
			roundNumber: 0,
			members: [],
			rounds: [],
			currentRound: {},
		},
	},
	action,
) => {
	switch (action.type) {
		case 'SET_ROOM_INFO':
			return {
				...state,
				info: {
					...state.info,
					...action.room,
				},
			};
		default:
			return state;
	}
};
