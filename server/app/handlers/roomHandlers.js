const io = require('socket.io');

const logics = require('../logics');

/**
 *
 * @param {io.Server} io
 * @param {io.Socket} socket
 */
module.exports = (io, socket) => {
	const createRoom = async ({ userId, name }, ack) => {
		try {
			const roomId = `roomId:${Date.now()}:${Math.round(Math.random() * 10000)}`;
			await io.socketsJoin(roomId);
			await logics.initRoom(roomId, userId, name);
			return ack({ ok: true, roomId });
		} catch (error) {
			console.log(error);
			ack({ ok: false, message: error.message });
		}
	};

	const fetchRoom = async ({ roomId }, ack) => {
		try {
			const room = await logics.fetchRoom(roomId);
			return ack({ ok: true, room });
		} catch (error) {
			console.log(error);
			ack({ ok: false, message: error.message });
		}
	};

	const joinRoom = async ({ roomId, userId, name }, ack) => {
		try {
			const room = await logics.joinRoom(roomId, userId, name);
			await io.socketsJoin(roomId);

			io.to(roomId).emit('member-joined', { room });
			return ack({ ok: true, roomId });
		} catch (error) {
			console.log(error);
			ack({ ok: false, message: error.message });
		}
	};

	socket.on('room:create', createRoom);
	socket.on('room:fetch', fetchRoom);
	socket.on('room:join', joinRoom);
};
