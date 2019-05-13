import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import ModalError from "../components/ModalError";
import {DevHelper} from "../helpers/DevHelper";
import {Actions} from "react-native-router-flux";

export default class BaseScene extends Component {
    constructor(props) {
        super(props);
        DevHelper.log("CONSTRUCTOR", props.name, props);
        this.state = {
            isLoading: true,
            ...this.states,
        };
    }

    async requestToApi(requestApiMethod) {
        this.setState({isLoading: true});
        const apiResult = await requestApiMethod();
        if (apiResult.ok) {
        } else if (apiResult.unAuthorize) {
            Actions.replace("home");
        } else {
            this.refs.errorModal.show("salam");
        }
        setTimeout(() => {
            this.setState({isLoading: false});
        }, 2000)
    }

    render() {
        DevHelper.log("RENDER", this.props.name, this.props);
        return (
            <SafeAreaView style={{flex: 1, backgroundColor: '#f7f7f9'}}>
                <ModalError ref="errorModal"/>
                {this.componentBody()}
            </SafeAreaView>
        )
    }
}