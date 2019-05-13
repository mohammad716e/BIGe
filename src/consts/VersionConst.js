import {Platform} from "react-native";

export default Platform.select({
    ios: {
        version: 1,
        displayVersion: '1.0.0',
    },
    android: {
        version: 1,
        displayVersion: '1.0.0',
    }
});