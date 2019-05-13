import {Linking, Platform,} from 'react-native';
import {DevHelper} from "../helpers/DevHelper";


export default {PhoneCall, Email, Message, MessageWithoutEncoding, OpenUrl};

const PhoneCall = (phoneNumber, prompt) => {
    if (arguments.length !== 2) {
        DevHelper.warn('you must supply exactly 2 arguments');
        return;
    }

    if (!isCorrectType('String', phoneNumber)) {
        DevHelper.warn('the phone number must be provided as a String value');
        return;
    }

    if (!isCorrectType('Boolean', prompt)) {
        DevHelper.warn('the prompt parameter must be a Boolean');
        return;
    }

    let url;

    if (Platform.OS !== 'android') {
        url = prompt ? 'telprompt:' : 'tel:';
    }
    else {
        url = 'tel:';
    }

    url += phoneNumber;

    LaunchURL(url);
};

const Email = function (to, cc, bcc, subject, body) {
    let url = 'mailto:';
    let argLength = arguments.length;

    switch (argLength) {
        case 0:
            LaunchURL(url);
            return;
        case 5:
            break;
        default:
            DevHelper.warn('you must supply either 0 or 5 arguments. You supplied ' + argLength);
            return;
    }

    // we use this Boolean to keep track of when we add a new parameter to the querystring
    // it helps us know when we need to add & to separate parameters
    let valueAdded = false;

    if (isCorrectType('Array', arguments[0])) {
        let validAddresses = getValidArgumentsFromArray(arguments[0], 'String');

        if (validAddresses.length > 0) {
            url += encodeURIComponent(validAddresses.join(','));
        }
    }

    url += '?';

    if (isCorrectType('Array', arguments[1])) {
        let validAddresses = getValidArgumentsFromArray(arguments[1], 'String');

        if (validAddresses.length > 0) {
            valueAdded = true;
            url += 'cc=' + encodeURIComponent(validAddresses.join(','));
        }
    }

    if (isCorrectType('Array', arguments[2])) {
        if (valueAdded) {
            url += '&';
        }

        let validAddresses = getValidArgumentsFromArray(arguments[2], 'String');

        if (validAddresses.length > 0) {
            valueAdded = true;
            url += 'bcc=' + encodeURIComponent(validAddresses.join(','));
        }
    }

    if (isCorrectType('String', arguments[3])) {
        if (valueAdded) {
            url += '&';
        }

        valueAdded = true;
        url += 'subject=' + encodeURIComponent(arguments[3]);
    }

    if (isCorrectType('String', arguments[4])) {
        if (valueAdded) {
            url += '&';
        }

        url += 'body=' + encodeURIComponent(arguments[4]);
    }

    LaunchURL(url);
};

const Message = function (phoneNumber = null, body = null) {
    if (arguments.length > 2) {
        DevHelper.warn('you supplied too many arguments. You can either supply 0 or 1 or 2');
        return;
    }

    let url = 'sms:';

    if (phoneNumber) {
        if (isCorrectType('String', phoneNumber)) {
            url += phoneNumber;
        } else {
            DevHelper.warn('the phone number should be provided as a string. It was provided as '
                + Object.prototype.toString.call(phoneNumber).slice(8, -1)
                + ',ignoring the value provided');
        }
    }

    if (body) {
        if (isCorrectType('String', body)) {
            // for some strange reason android seems to have issues with ampersands in the body unless it is encoded twice!
            // iOS only needs encoding once
            if (Platform.OS === 'android') body = encodeURIComponent(body);
            url += Platform.OS === 'ios' ? `&body=${encodeURIComponent(body)}` : `?body=${encodeURIComponent(body)}`;
        } else {
            DevHelper.warn('the body should be provided as a string. It was provided as '
                + Object.prototype.toString.call(body).slice(8, -1)
                + ',ignoring the value provided');
        }
    }

    LaunchURL(url);
};

const MessageWithoutEncoding = function (phoneNumber = null, body = null) {
    if (arguments.length > 2) {
        DevHelper.warn('you supplied too many arguments. You can either supply 0 or 1 or 2');
        return;
    }

    let url = 'sms:';

    if (phoneNumber) {
        if (isCorrectType('String', phoneNumber)) {
            url += phoneNumber;
        } else {
            DevHelper.warn('the phone number should be provided as a string. It was provided as '
                + Object.prototype.toString.call(phoneNumber).slice(8, -1)
                + ',ignoring the value provided');
        }
    }

    if (body) {
        if (isCorrectType('String', body)) {
            url += Platform.OS === 'ios' ? `&body=${body}` : `?body=${body}`;
        } else {
            DevHelper.warn('the body should be provided as a string. It was provided as '
                + Object.prototype.toString.call(body).slice(8, -1)
                + ',ignoring the value provided');
        }
    }

    LaunchURL(url);
};

const OpenUrl = (address = null) => {
    if (!address) {
        DevHelper.warn('Missing address argument');
        return;
    }
    if (!isCorrectType('String', address)) {
        DevHelper.warn('address was not provided as a string, it was provided as '
            + Object.prototype.toString.call(address).slice(8, -1));
        return;
    }
    LaunchURL(address);
};

const LaunchURL = function (url) {
    Linking.canOpenURL(url).then(supported => {
        if (!supported) {
            DevHelper.warn('Can\'t handle url: ' + url);
        } else {
            Linking.openURL(url)
                .catch(err => {
                    if (url.includes('telprompt')) {
                        // telprompt was cancelled and Linking openURL method sees this as an error
                        // it is not a true error so ignore it to prevent apps crashing
                        // see https://github.com/anarchicknight/react-native-communications/issues/39
                    } else {
                        DevHelper.warn('openURL error', err)
                    }
                });
        }
    }).catch(err => DevHelper.warn('An unexpected error happened', err));
};

const getValidArgumentsFromArray = function (array, type) {
    const validValues = [];
    array.forEach(function (value) {
        if (isCorrectType(type, value)) {
            validValues.push(value);
        }
    });

    return validValues;
};

const isCorrectType = function (expected, actual) {
    return Object.prototype.toString.call(actual).slice(8, -1) === expected;
};