import {SecureStorageService} from "./SecureStorageService";

const isUserTokenExistService = async () => {
    const {token = "", id} = (await getToken);
    return token !== "";
};

const loginUser = (data) => {
    // const {token = "", id} = store.getState().user;
    // return token !== "";
};

const getToken = async () => {
    return await SecureStorageService.get(SecureStorageService.ValueKeys.user);
};

export const UserService = {
    loginUser,
    isUserTokenExistService,
    getToken
};