import { combineReducers } from 'redux';

import { QUOTES_AVAILABLE, ADD_QUOTE } from './actions';

let dataState = { quotes: [] };

const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case ADD_QUOTE:
            let { quote } = action.data;
            let clone = JSON.parse(JSON.stringify(state.quotes));
            clone.unshift(quote);
            return { ...state, quotes: clone };
        case QUOTES_AVAILABLE:
            let { quotes } = action.data;
            return { ...state, quotes };
        default:
            return state;
    }
};

// Combine all the reducers
const rootReducer = combineReducers({ dataReducer });

export default rootReducer;
