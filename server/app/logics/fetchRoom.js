/**
 * @param {Map} rooms
 */
const fetchRoom = (rooms) => (roomId) => {
	return rooms.get(roomId);
};

module.exports = fetchRoom;
