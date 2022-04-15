import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createWhitelistFilter } from 'redux-persist-transform-filter';

import storage from 'redux-persist/lib/storage';
import reducer from './combineReducers';

const themeWhiteList = createWhitelistFilter('theme', ['local']);
const persistConfig = {
    storage,

    key: 'root',

    // Whitelist (Save Specific Reducers)
    whitelist: [
        'auth',
        'theme',
    ],

    // Blacklist (Don't Save Specific Reducers)
    blacklist: [],

    transforms: [themeWhiteList],
};
const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer, composeWithDevTools());
const persistor = persistStore(store);

export {
    store,
    persistor,
};
