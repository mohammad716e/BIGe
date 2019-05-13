import React, {Component} from 'react';
import {Router, Scene} from "react-native-router-flux";
import EStyleSheet from 'react-native-extended-stylesheet';
import {Provider} from "react-redux";
import {I18nManager} from "react-native";
import {GlobalStyle} from "./assets/style/GlobalStyle";
import BlankScene from "./scenes/BlankScene";
import SplashScene from "./scenes/start/SplashScene";
import store from "./redux/store/index";
import ErrorScene from "./scenes/start/ErrorScene";

EStyleSheet.build(GlobalStyle);

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Scene key="root" initial>
                        <Scene hideNavBar initial key="blank" component={BlankScene}/>
                        <Scene hideNavBar initial key="splash" component={SplashScene}/>
                        <Scene hideNavBar key="error" component={ErrorScene}/>
                    </Scene>
                </Router>
            </Provider>
        );
    }
}
