const consts = require('../consts');

/**
 * @param {Map} rooms
 */
const endGame = (rooms) => (roomId) => {
	const room = rooms.get(roomId);
	for (const member of room.members) {
		for (const category of room.categories) {
			member.points = Number(member.points) + Number(room.rounds[room.rounds.length - 1][member.id][category].point);
		}
	}
	room.status = consts.roomStatues.gameEnded;

	console.log(rooms);
	return room;
};

module.exports = endGame;
