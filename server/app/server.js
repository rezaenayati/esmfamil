const { Server } = require('socket.io');
const initConnection = require('./connetion');

function run() {
	const io = new Server(3001, {
		cors: {
			origin: '*',
		},
	});
	io.on('connection', initConnection(io));
}

module.exports = run;
