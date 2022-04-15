import { fa, en } from './expressions';
import { store } from '../Redux/store';

const localizer = (exp) => {
    const state = store.getState();
    const local = state.theme.local;
    if (local === 'fa') {
        return fa[exp];
    }
    return en[exp];
};

export {
    localizer,
};
