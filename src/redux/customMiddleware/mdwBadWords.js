import { CREATE_POST } from './../reducers/types';
import { showAlert } from './../actions/actions';

const badWords = ['spam', 'cheats'];

export function badWordsMiddleware({ dispatch }) {
    return function (next) {
        return function (action) {
            if (action.type === CREATE_POST) {
                const found = badWords.filter(w => action.payload.title.includes(w));
                if (found.length) {
                    return dispatch(showAlert('Stop spaming!'));
                };
            };
            return next(action);
        };
    };
};