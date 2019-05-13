export const isNullOrWhiteSpace = (mobile) => {
    return !mobile || mobile.toString().trim() === "";
};

export const isMobileValid = (mobile) => {
    return mobile && mobile.toString() !== "" && mobile.toString().length === 11;
};