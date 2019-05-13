import React, {Component} from 'react';
import {Text, View} from "react-native";
import {connect} from "react-redux";
import {setUser} from "../../redux/actions/SetActions";
import {getFromState, getRehydrated, getUser} from "../../redux/actions/GetActions";
import NetInfoListener from "../../listener/NetInfoListener";
import AppStateListener from "../../listener/AppStateListener";
import OrientationListener from "../../listener/OrientationListener";
import Footer from "../../elements/Footer";
import BaseScene from "../BaseScene";

class SplashScene extends BaseScene {
    states = {
        test: "HI",
    };

    constructor(props) {
        super(props);
        this.AddAllListener();
    }

    AddAllListener() {
        NetInfoListener.addEvent();
        AppStateListener.addEvent();
        OrientationListener.initialize();
    }

    componentBody() {
        return <View style={{flex: 1}}>
            <Text onPress={() => super.requestToApi()}>{this.states.test}</Text>
            <Footer/>
        </View>;
    }
}

export default connect(state => getFromState(state, [getUser, getRehydrated]), {setUser})(SplashScene);