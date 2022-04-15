const consts = require('../consts');

/**
 * @param {Map} rooms
 * @param {Map} timers
 */
const endRound = (rooms, timers) => (roomId) => {
	const room = rooms.get(roomId);
	room.rounds.push(room.currentRound);
	room.currentRound = {};
	room.status = consts.roomStatues.roundEnded;
	room.roundDeadline = 0;

	clearTimeout(timers.get(roomId));

	console.log(rooms);
	return room;
};

module.exports = endRound;
