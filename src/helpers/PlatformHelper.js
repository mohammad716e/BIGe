import {Platform} from 'react-native';

const platform = Platform.OS;
const isIos = (platform === 'ios');
const isAndroid = (platform === 'android');

export const PlatformHelper = {
    platform,
    isIos,
    isAndroid
};
