module.exports = {
	port: process.env.REDIS_DEFAULT_PORT || 6379,
	host: process.env.REDIS_DEFAULT_HOST || '127.0.0.1',
	ipVersion: process.env.REDIS_DEFAULT_IPVERSION || 4,
	dbNumber: process.env.REDIS_DEFAULT_DBNUMBER || 0,
	password: process.env.REDIS_DEFAULT_PASSWORD || undefined,
};
