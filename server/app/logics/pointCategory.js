const consts = require('../consts');

/**
 * @param {Map} rooms
 */
const pointCategory = (rooms, endCb) => (roomId, hostId, data) => {
	const room = rooms.get(roomId);
	if (room.hostId !== hostId) {
		throw new Error('not premitted');
	}
	if (room.status !== consts.roomStatues.roundEnded) {
		throw new Error('invalid request');
	}

	console.log(data);
	for (const memberId of Object.keys(data)) {
		for (const category of Object.keys(data[memberId])) {
			room.rounds[room.rounds.length - 1][memberId][category].point = data[memberId][category] || 0;
		}
	}

	if (room.roundNumber >= room.roundMaxNumber) {
		return endCb(roomId);
	}

	console.log(rooms);
	return room;
};

module.exports = pointCategory;
