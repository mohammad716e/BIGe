import {AppState} from "react-native";
import {Actions} from 'react-native-router-flux'

let lastView = new Date();
let listener = null;

const handleAppStateChange = (nextAppState) => {
    if (nextAppState === 'active') {
        const diff = new Date() - lastView;
        if (diff > 600000) {
            Actions.replace("Splash");
        }
    }
    else {
        lastView = new Date();
    }
};

const AppStateListener = {
    addEvent: () => {
        AppStateListener.removeEvent();
        listener = AppState.addEventListener('change', handleAppStateChange);
    },
    removeEvent: () => {
        if (listener) {
            listener.remove();
            // AppState.removeEventListener('change', handleAppStateChange);
        }
    },
    getState: () => {
        return AppState.currentState;
    },
};

export default AppStateListener;
