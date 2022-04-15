const consts = require('../consts');

/**
 * @param {Map} rooms
 * @param {Map} timers
 */
const askEndRound = (rooms, timers) => (roomId, memberId) => {
	const room = rooms.get(roomId);
	// TODO should check emty spots
	room.rounds.push(room.currentRound);
	room.currentRound = {};
	room.status = consts.roomStatues.roundEnded;
	room.roundDeadline = 0;

	clearTimeout(timers.get(roomId));

	console.log(rooms);
	return room;
};

module.exports = askEndRound;
