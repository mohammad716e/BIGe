import {SET_USER} from "./type";

export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
};
