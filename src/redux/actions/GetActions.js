export const getFromState = (state, array = []) => {
    let props = {};
    for (let index = 0; index < array.length; index++) {
        props = {
            ...props,
            ...array[index](state)
        };
    }
    return props;
};

export const getUser = (state) => {
    return {user: state.user};
};

export const getRehydrated = (state) => {
    return {rehydrated: state.rehydrated};
};
