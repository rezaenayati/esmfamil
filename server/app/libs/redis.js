const Redis = require('ioredis');

const config = require('../configs/redis');

const defaultRedisConfigs = {
	port: config.port,
	host: config.host,
	family: config.ipVersion,
	db: config.dbNumber,
};

if (config.password) {
	defaultRedisConfigs.password = config.password;
}

const defaultRedis = new Redis(defaultRedisConfigs);

/**
 * @param {Redis.Redis} instance
 */
const set = (instance) => (key, value) => {
	return instance.set(key, value);
};

/**
 * @param {Redis.Redis} instance
 */
const setex = (instance) => (key, ttl, value) => {
	return instance.setex(key, ttl, value);
};

/**
 * @param {Redis.Redis} instance
 */
const get = (instance) => (key) => {
	return instance.get(key);
};

/**
 * @param {Redis.Redis} instance
 */
const subscribe = (instance) => (channel) => {
	return instance.subscribe(channel);
};

/**
 * @param {Redis.Redis} instance
 */
const publish = (instance) => (channel, message) => {
	return instance.publish(channel, message);
};

/**
 * @param {Redis.Redis} instance
 */
const on = (instance) => (event, listener) => {
	return instance.on(event, listener);
};

/**
 * @param {Redis.Redis} instance
 */
const mget = (instance) => (keys) => {
	return instance.mget(keys);
};

/**
 * @param {Redis.Redis} instance
 */
const msetex = (instance) => (object, ttl) => {
	const redis = instance.multi();
	redis.mset(object);
	for (const key of Object.keys(object)) {
		redis.expire(key, ttl);
	}
	return redis.exec();
};

module.exports = {
	default: {
		/**
		 * @type {Redis.Redis}
		 */
		instance: defaultRedis,
		set: set(defaultRedis),
		get: get(defaultRedis),
		subscribe: subscribe(defaultRedis),
		publish: publish(defaultRedis),
		on: on(defaultRedis),
		setex: setex(defaultRedis),
		msetex: msetex(defaultRedis),
		mget: mget(defaultRedis),
	},
};
