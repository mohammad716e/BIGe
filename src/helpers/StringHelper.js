export const toPersianNumbers = (data) => {
    if (!data) {
        return "";
    }
    data = data.toString();
    const persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const english = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arabic = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

    for (let i = 0; i <= 9; i++) {
        data = data.split(english[i]).join(persian[i]);
        data = data.split(arabic[i]).join(persian[i]);
    }
    return data;
};


export const toEnglishNumbers = (data) => {
    if (!data) {
        return "";
    }
    data = data.toString();
    const persian = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const arabic = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const english = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    for (let i = 0; i <= 9; i++) {
        data = data.split(persian[i]).join(english[i]);
        data = data.split(arabic[i]).join(english[i]);
    }
    return data;
};


