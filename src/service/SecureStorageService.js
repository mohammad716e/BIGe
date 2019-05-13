import RNSecureStorage, {ACCESSIBLE} from 'rn-secure-storage'
import {DevHelper} from "../helpers/DevHelper";

const ValueKeys = {
    user: "user"
};

const get = async (key) => {
    try {
        const value = await RNSecureStorage.get(key);
        return await JSON.parse(value);
    } catch (e) {
        DevHelper.warn(e);
        return null;
    }
};

const set = async (key, value) => {
    try {
        await RNSecureStorage.set(key, JSON.stringify(value), {accessible: ACCESSIBLE.WHEN_UNLOCKED});
        return true;
    } catch (e) {
        DevHelper.warn(e);
        return false;
    }
};

const remove = async (key) => {
    try {
        await RNSecureStorage.remove(key);
        return true;
    } catch (e) {
        DevHelper.warn(e);
        return false;
    }
};

export const SecureStorageService = {
    ValueKeys,
    get,
    set,
    remove
};

