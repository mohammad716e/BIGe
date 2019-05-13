import React, {Component} from 'react';
import ModalExtended from "./ModalExtended";
import {Text, TouchableOpacity, View} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

export default class ModalAlert extends Component {
    show() {
        this.refs.modal.show();
    }

    close() {
        this.refs.modal.close();
    }

    _renderButtons(item, index) {
        return <TouchableOpacity key={index} style={styles.button} onPress={item.onPress}>
            <Text style={styles.buttonText}>{item.text}</Text>
        </TouchableOpacity>;
    }

    render() {
        const {title, buttons, message} = this.props;
        return (
            <ModalExtended title={title} center ref="modal">
                {message ? <Text style={styles.message}>{message}</Text> : null}
                <View style={{
                    flex: 1,
                    width: "100%",
                    flexDirection: "row",
                    paddingTop: 20,
                    paddingBottom: 20,
                    justifyContent: "space-around"
                }}>
                    {
                        buttons.map(this._renderButtons.bind(this))
                    }
                </View>
            </ModalExtended>
        );
    }
}


const styles = EStyleSheet.create({
    message: {
        fontSize: 18,
        fontFamily: "IRANSansMobile",
        textAlign: "center",
    },
    buttonText: {
        fontSize: 18,
        color: "#FFF",
        fontFamily: "IRANSansMobile",
    },
    button: {
        width: "45%",
        padding: 10,
        borderRadius: 5,
        backgroundColor: "#2a4288",
        alignItems: "center",
        justifyContent: "center",
    },

});