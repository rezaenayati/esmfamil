const { localizer } = require('../Utils/localizer');

module.exports = {
	sideBarMenu: {
		chatReports: { name: 'chat-reports', label: localizer('chatReports') },
		profileReports: { name: 'profile-reports', label: localizer('profileReports') },
		restoreAccount: { name: 'restore-account', label: localizer('restoreAccount') },
		users: { name: 'users', label: localizer('users') },
		wordChecker: { name: 'words', label: localizer('wordChecker') },
		suggestedWordChecker: { name: 'word-checker', label: localizer('suggestedWordChecker') },
		news: { name: 'news', label: localizer('news') },
		systemicMessages: { name: 'systemic-messages', label: localizer('systemicMessages') },
		groups: { name: 'groups', label: localizer('groups') },
		groupReports: { name: 'groups-reports', label: localizer('groupsReports') },
		giftCode: { name: 'gift-codes', label: localizer('giftCode') },
		giftCodePackage: { name: 'gift-codes/package', label: localizer('giftCodePackage') },
	},
	roomStatues: {
		inited: 'inited',
		gameStarted: 'gameStarted',
		roundPlaying: 'roundPlaying',
		roundEnded: 'roundEnded',
		gameEnded: 'gameEnded',
	},
};
