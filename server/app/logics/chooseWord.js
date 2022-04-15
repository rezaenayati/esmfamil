const consts = require('../consts');

/**
 * @param {Map} rooms
 */
const chooseWord = (rooms) => (roomId, memberId, category, word) => {
	const room = rooms.get(roomId);
	if (room.status !== consts.roomStatues.roundPlaying || Date.now() > room.roundDeadline) {
		throw new Error('invalid request');
	}
	room.currentRound[memberId][category] = {
		value: word,
		point: 0,
	};

	console.log(rooms);
	return room;
};

module.exports = chooseWord;
