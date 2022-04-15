import Config from '../Config';

const buildRestoreLink = (purchaseToken) => `${Config.restoreLink}?Authority=${purchaseToken}&Status=OK&scheme=bazambazi&restore=true`;

const buildGiftRestoreLink = (purchaseToken) => `${Config.giftRestoreLink}?Authority=${purchaseToken}&Status=OK&scheme=bazambazi&restore=true`;

export {
    buildRestoreLink,
    buildGiftRestoreLink,
};
