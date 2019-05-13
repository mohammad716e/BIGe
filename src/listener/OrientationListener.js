import {Platform} from 'react-native'
import Orientation from "react-native-orientation";

let listener = null;

const handleChange = (state) => {
    console.log(state);
};

const lockToPortraitListener = (orientation) => {
    OrientationListener.lockToPortrait();
};

const OrientationListener = {
    addEvent: async () => {
        this.removeEvent();
        listener = Orientation.addOrientationListener('connectionChange', handleChange);
    },
    removeEvent: async () => {
        if (listener) {
            Orientation.removeOrientationListener(handleChange);
        }
    },
    getOrientation: async () => {
        return await Orientation.getOrientation();
    },
    lockToPortrait: () => {
        if (Platform.OS === "ios") {
            Orientation.addOrientationListener(lockToPortraitListener);
        }
        Orientation.lockToPortrait();
    },
    unlockAllOrientations: () => {
        Orientation.unlockAllOrientations();
    },
    initialize: () => {
        OrientationListener.lockToPortrait();
    }
};

export default OrientationListener;