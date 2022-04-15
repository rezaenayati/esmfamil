const consts = require('../consts');

/**
 * @param {Map} rooms
 */
const initGame =
	(rooms) =>
	(roomId, hostId, categories = ['name', 'family'], roundDuration = 30 * 1000, roundMaxNumber = 1) => {
		const room = rooms.get(roomId);
		if (room.hostId !== hostId) {
			throw new Error('not premitted');
		}
		if (room.status !== consts.roomStatues.inited) {
			throw new Error('invalid request');
		}

		room.roundDuration = roundDuration;
		room.roundMaxNumber = roundMaxNumber;
		room.status = consts.roomStatues.gameStarted;
		room.categories = categories;

		console.log(rooms);
		return room;
	};

module.exports = initGame;
