import React from 'react';
import EStyleSheet from "react-native-extended-stylesheet";
import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Modal from "react-native-modal";

export default class BaseModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
    }

    show() {
        this.setState({isVisible: true});
    }

    close() {
        this.setState({isVisible: false});
    }

    render() {
        const {isVisible} = this.state;
        const {children, title, center} = this.props;

        return (
            <Modal
                transparent
                isVisible={isVisible}
                onRequestClose={this.close.bind(this)}
                onBackdropPress={this.close.bind(this)}
                style={{
                    flex: 1,
                    alignItems: center ? "center" : "flex-start",
                    justifyContent: center ? "center" : "flex-start",
                    margin: 0,
                    marginTop: 20,
                    marginBottom: 20,
                    marginRight: 10,
                    marginLeft: 10,
                    //, paddingTop: 30,
                }}
            >
                <View style={{backgroundColor: "#FFF", width: "100%", borderRadius: 3, overflow: "hidden"}}>
                    <View
                        style={{
                            width: "100%",
                            backgroundColor: "#f6f8fc",
                            justifyContent: 'space-between',
                            alignItems: "center",
                            flexDirection: 'row-reverse'
                        }}
                    >
                        <Text style={styles.title}>{title}</Text>
                        <TouchableOpacity onPress={this.close.bind(this)}>
                            <MaterialCommunityIcons style={styles.icon} name="close"/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView keyboardShouldPersistTaps="always" style={{
                        width: "100%",
                        // marginBottom: 40
                    }}>
                        {children}
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}

const styles = EStyleSheet.create({
    buttonContainer: {
        marginLeft: "3%",
        marginRight: "3%",
    },
    buttonText: {
        fontSize: 16,
        fontFamily: "IRANSansMobile",
        textAlign: "center",
        padding: 10,
        borderRadius: 6,
        height: 50,
        width: "100%",
        color: "#FFF",
        backgroundColor: "#02a0a9",
    },
    title: {
        fontFamily: "IRANSansMobile",
        fontSize: 13,
        textAlign: "right",
        color: "#000",
        padding: 15
    },
    icon: {
        color: "#000",
        fontSize: 28,
        padding: 5
    },
    input: {
        width: "100%",
        backgroundColor: "#FFF",
        borderRadius: 5,
        fontFamily: "IRANSansMobile",
        borderWidth: 1,
        borderColor: "#E2e2e2"
    },
    topText: {
        textAlign: 'center',
        fontFamily: 'IRANSansMobile',
        fontSize: 15,
        padding: 12,

    },
    submitButton: {
        backgroundColor: "#f7941d",
        borderRadius: 10,
        color: "#FFF",
        padding: 10,
        marginTop: 25
    },
});