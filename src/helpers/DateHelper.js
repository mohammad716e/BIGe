export const getMonthString = (number) => {
    if (!number) {
        return number;
    }
    if (number.toString().startsWith("0")) {
        number = parseInt(number.substring(1, 2));
    }
    switch (number) {
        case 1:
            return 'فروردین';
        case 2:
            return 'اردیبهشت';
        case 3:
            return 'خرداد';
        case 4:
            return 'تیر';
        case 5:
            return 'مرداد';
        case 6:
            return 'شهریور';
        case 7:
            return 'مهر';
        case 8:
            return 'آبان';
        case 9:
            return 'آذر';
        case 10:
            return 'دی';
        case 11:
            return 'بهمن';
        case 12:
            return 'اسفند';
    }
    return number;
};

export const getMonthNumber = (string) => {
    switch (string) {
        case 'فروردین':
            return 1;
        case 'اردیبهشت':
            return 2;
        case 'خرداد':
            return 3;
        case 'تیر':
            return 4;
        case 'مرداد':
            return 5;
        case 'شهریور':
            return 6;
        case 'مهر':
            return 7;
        case 'آبان':
            return 8;
        case 'آذر':
            return 9;
        case 'دی':
            return 10;
        case 'بهمن':
            return 11;
        case 'اسفند':
            return 12;
    }
    return string;
};