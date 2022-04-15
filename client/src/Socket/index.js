import { io } from 'socket.io-client';

import { store } from '../Redux/store';
import { saveRoom } from '../Redux/room/action';

let socket;
export default {
	connectSocket: () => {
		socket = io('http://localhost:3001');
		socket.on('connect', () => {
			console.log(socket.id); // x8WIv7-mJelg7on_ALbx
		});
		socket.on('member-joined', (data) => {
			console.log('member-joined');
			saveRoom(data.room)(store.dispatch);
		});
		socket.on('start-round', (data) => {
			console.log('start-round', data);
			saveRoom(data.room)(store.dispatch);
		});
		socket.on('end-round', (data) => {
			console.log('end-round', data);
			saveRoom(data.room)(store.dispatch);
		});
		socket.on('start-game', (data) => {
			console.log('start-game', data);
			saveRoom(data.room)(store.dispatch);
		});
	},

	createRoom: async (name) => {
		return new Promise((resolve, reject) => {
			const userId = sessionStorage.getItem('userId');
			socket.emit('room:create', { userId, name }, (response) => {
				console.log(response);
				return resolve(response);
			});
		});
	},

	fetchRoom: async (roomId) => {
		return new Promise((resolve, reject) => {
			if (socket) {
				socket.emit('room:fetch', { roomId }, (response) => {
					console.log(response);
					saveRoom(response.room)(store.dispatch);
					return resolve(response);
				});
			}
			setTimeout(() => {
				socket.emit('room:fetch', { roomId }, (response) => {
					console.log(response);
					saveRoom(response.room)(store.dispatch);
					return resolve(response);
				});
			}, 500);
		});
	},

	joinRoom: async (roomId, name) => {
		return new Promise((resolve, reject) => {
			const userId = sessionStorage.getItem('userId');
			socket.emit('room:join', { roomId, userId, name }, (response) => {
				console.log(response);
				socket.on(response.roomId, () => {
					console.log('what just happened');
				});
				return resolve(response);
			});
		});
	},

	startRound: async (roomId, character) => {
		return new Promise((resolve, reject) => {
			const userId = sessionStorage.getItem('userId');
			socket.emit('game:start-round', { roomId, userId, character }, (response) => {
				console.log(response);
				return resolve(response);
			});
		});
	},

	startGame: async (roomId, categories, duration, maxNumber) => {
		return new Promise((resolve, reject) => {
			const userId = sessionStorage.getItem('userId');
			console.log({ roomId, userId, categories, duration, maxNumber });
			socket.emit('game:start', { roomId, userId, categories, duration, maxNumber }, (response) => {
				console.log(response);
				return resolve(response);
			});
		});
	},

	enterWord: async (roomId, category, word) => {
		return new Promise((resolve, reject) => {
			const userId = sessionStorage.getItem('userId');
			console.log({ roomId, userId, category, word });
			socket.emit('game:choose-word', { roomId, userId, category, word }, (response) => {
				console.log(response);
				return resolve(response);
			});
		});
	},

	askEndRound: async (roomId) => {
		return new Promise((resolve, reject) => {
			const userId = sessionStorage.getItem('userId');
			console.log({ roomId, userId });
			socket.emit('game:ask-end-round', { roomId, userId }, (response) => {
				console.log(response);
				return resolve(response);
			});
		});
	},

	pointWord: async (roomId, data) => {
		return new Promise((resolve, reject) => {
			const userId = sessionStorage.getItem('userId');
			socket.emit('game:choose-point', { roomId, userId, data }, (response) => {
				console.log(response);
				return resolve(response);
			});
		});
	},
};
