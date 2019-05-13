import {AppState, NetInfo} from 'react-native'
import {Actions} from "react-native-router-flux";

let status = "";
let currentListener = null;

const handleConnectivityChange = (isConnected) => {
    status = isConnected.type;
    if (AppState.currentState === "active" && status === "none" && Actions.currentScene !== "error") {
        Actions.replace('error');
    }
};

const NetInfoListener = {
    addEvent: async () => {
        NetInfoListener.removeEvent();
        currentListener = NetInfo.addEventListener('connectionChange', handleConnectivityChange);
    },
    removeEvent: async () => {
        if (currentListener) {
            currentListener.remove();
        }
    },
    getInfo: status,
    isConnected: status !== "none",
};

export default NetInfoListener;