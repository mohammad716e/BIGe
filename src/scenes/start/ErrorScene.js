import React, {Component} from 'react';
import {Text} from "react-native";
import BaseScene from "../BaseScene";

class ErrorScene extends BaseScene {
    states = {
        test: "test"
    };

    componentBody() {
        return <Text>error</Text>;
    }
}

export default ErrorScene;