const consts = require('../consts');

/**
 * @param {Map} rooms
 */
const joinRoom = (rooms) => (roomId, memberId, memberName) => {
	const room = rooms.get(roomId);
	if (room.status !== consts.roomStatues.inited) {
		throw new Error('invalid request');
	}
	if (room.members.length >= 5) {
		throw new Error('room is full');
	}
	room.members.push({ id: memberId, name: memberName, points: 0 });

	console.log(rooms);
	return room;
};

module.exports = joinRoom;
