const endRound = require('./endRound');
const fetchRoom = require('./fetchRoom');
const initRoom = require('./initRoom');
const joinRoom = require('./joinRoom');
const startRound = require('./startRound');
const initGame = require('./initGame');
const endGame = require('./endGame');
const chooseWord = require('./chooseWord');
const pointCategory = require('./pointCategory');
const askEndRound = require('./askEndRound');

const rooms = new Map();
const timers = new Map();

module.exports = {
	rooms,
	timers,
	initRoom: initRoom(rooms, timers),
	fetchRoom: fetchRoom(rooms, timers),
	joinRoom: joinRoom(rooms, timers),
	endRound: endRound(rooms, timers),
	startRound: startRound(rooms, timers),
	initGame: initGame(rooms, timers),
	endGame: endGame(rooms, timers),
	chooseWord: chooseWord(rooms, timers),
	pointCategory: pointCategory(rooms, timers),
	askEndRound: askEndRound(rooms, timers),
};
