import React, {Component} from 'react';
import {Actions} from "react-native-router-flux";

export default class BlankScene extends Component {
    constructor(props) {
        super(props);

        setTimeout(() => {
            Actions.splash();
        }, 1)
    }

    render() {
        return null;
    }
}