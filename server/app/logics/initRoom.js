const consts = require('../consts');

/**
 * @param {Map} rooms
 */
const initRoom = (rooms) => (roomId, hostId, hostName) => {
	const room = rooms.set(roomId, {
		id: roomId,
		hostId,
		status: consts.roomStatues.inited,
		roundNumber: 0,
		members: [{ id: hostId, name: hostName, points: 0 }],
		rounds: [],
		currentRound: {},
		categories: [],
		roundMaxNumber: 0,
		roundDuration: 0,
	});

	console.log(rooms);
	return room;
};

module.exports = initRoom;
