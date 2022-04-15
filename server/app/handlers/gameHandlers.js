const io = require('socket.io');

const logics = require('../logics');

/**
 *
 * @param {io.Server} io
 * @param {io.Socket} socket
 */
module.exports = (io, socket) => {
	const startGame = async ({ roomId, userId, categories, duration, maxNumber }, ack) => {
		try {
			const room = await logics.initGame(roomId, userId, categories, duration, maxNumber);

			io.to(roomId).emit('start-game', { room });
			return ack({ ok: true, room });
		} catch (error) {
			console.log(error);
			ack({ ok: false, message: error.message });
		}
	};

	const startRound = async ({ roomId, userId, character }, ack) => {
		try {
			const room = await logics.startRound(
				roomId,
				userId,
				character,
				(room) => {
					const endedRoundRoom = logics.endRound(roomId);
					io.to(roomId).emit('end-round', { room: endedRoundRoom });
				},
				(room) => {
					io.to(roomId).emit('end-game', { room });
					return logics.endGame(roomId);
				},
			);

			io.to(roomId).emit('start-round', { room });
			return ack({ ok: true, room });
		} catch (error) {
			console.log(error);
			ack({ ok: false, message: error.message });
		}
	};

	const chooseWord = async ({ roomId, userId, category, word }, ack) => {
		try {
			const room = await logics.chooseWord(roomId, userId, category, word);
			return ack({ ok: true, room });
		} catch (error) {
			console.log(error);
			ack({ ok: false, message: error.message });
		}
	};

	const choosePoint = async ({ roomId, userId, data }, ack) => {
		try {
			const room = await logics.pointCategory(roomId, userId, data, (room) => {
				const endedRoom = logics.endGame(roomId);
				return io.to(roomId).emit('end-game', { room: endedRoom });
			});

			return ack({ ok: true, room });
		} catch (error) {
			console.log(error);
			ack({ ok: false, message: error.message });
		}
	};

	const askEndRound = async ({ roomId, userId }, ack) => {
		try {
			const room = await logics.askEndRound(roomId, userId);

			io.to(roomId).emit('end-round', { room });

			return ack({ ok: true, room });
		} catch (error) {
			console.log(error);
			ack({ ok: false, message: error.message });
		}
	};

	socket.on('game:start', startGame);
	socket.on('game:start-round', startRound);
	socket.on('game:choose-word', chooseWord);
	socket.on('game:choose-point', choosePoint);
	socket.on('game:ask-end-round', askEndRound);
};
