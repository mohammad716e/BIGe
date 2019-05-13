import {StatusBar} from "react-native";

export const StatusBarHelper = {
    setBackgroundColor: (color, animated = true) => {
        StatusBar.setBackgroundColor(color, animated);
    },
    setStatusBarTranslucent: (value) => {
        StatusBar.setTranslucent(value);
    },
    getStatusBarHeight() {
        return StatusBar.currentHeight;
    },
};
