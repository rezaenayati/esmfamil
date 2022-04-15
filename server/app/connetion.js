const gameHandlers = require('./handlers/gameHandlers');
const roomHandlers = require('./handlers/roomHandlers');

const initConnection = (io) => (socket) => {
	gameHandlers(io, socket);
	roomHandlers(io, socket);
};

module.exports = initConnection;
