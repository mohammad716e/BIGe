import {combineReducers} from 'redux';
import {SET_USER} from "../actions/type";

const rehydrated = (state = false, action) => {
    switch (action.type) {
        case "persist/REHYDRATE" :
            return true;
            break;
        default:
            return state;
    }
};

const initialUser = {mahdi: 2};
const user = (state = initialUser, action = {}) => {
    switch (action.type) {
        case SET_USER :
            return {
                ...state,
                ...action.user
            };
        default:
            return state;
    }
};


export default combineReducers({
    rehydrated,
    user,
});

