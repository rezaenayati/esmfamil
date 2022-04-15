const consts = require('../consts');

/**
 * @param {Map} rooms
 * @param {Map} timers
 */
const startRound = (rooms, timers) => (roomId, hostId, character, timeoutCb, endCb) => {
	const room = rooms.get(roomId);
	if (room.hostId !== hostId) {
		throw new Error('not premitted');
	}
	console.log(room);
	if (!(room.status === consts.roomStatues.gameStarted || room.status === consts.roomStatues.roundEnded)) {
		throw new Error('invalid request');
	}
	if (room.roundNumber > room.roundMaxNumber) {
		return endCb(room);
	}

	room.currentRound = {
		character,
	};
	room.status = consts.roomStatues.roundPlaying;
	room.roundNumber++;
	room.roundDeadline = Date.now() + room.roundDuration;
	const game = {};
	for (const category of room.categories) {
		game[category] = {
			value: '',
			point: 0,
		};
	}
	for (const member of room.members) {
		room.currentRound[member.id] = { ...game };
	}
	if (room.roundNumber !== 1) {
		for (const member of room.members) {
			for (const category of room.categories) {
				member.points = Number(member.points) + Number(room.rounds[room.rounds.length - 1][member.id][category].point);
			}
		}
	}

	if (timers.get(roomId)) {
		clearTimeout(timers.get(roomId));
	}
	timers.set(
		roomId,
		setTimeout(() => timeoutCb(room), room.roundDuration),
	);

	console.log(rooms);
	return room;
};

module.exports = startRound;
