import React, {Component} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import Modal from "react-native-modal";

export default class ModalLoading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
            errorMessage: null,
        };
    }

    show() {
        this.setState({isVisible: true});
    }

    close(errorMessage = null) {
        this.setState({errorMessage, isVisible: false}, () => {
            setTimeout(() => {
                if (errorMessage) {
                    setTimeout(() => {
                        this.setState({errorMessage: null});
                    }, 5000);
                }
            }, 200)
        });
    }

    render() {
        const {errorMessage, isVisible} = this.state;
        return (
            <SafeAreaView>
                {
                    errorMessage ?
                        <View style={{
                            backgroundColor: "#ed2749",
                            width: "100%",
                            position: "absolute",
                            top: 0,
                            zIndex: 9999,
                        }}>
                            <Text style={styles.title}>{errorMessage}</Text>
                        </View>
                        : null
                }
                <Modal
                    animationIn="slideInDown"
                    animationOut="slideOutUp"
                    transparent
                    isVisible={isVisible}
                    onBackdropPress={null}
                    onRequestClose={null}
                    style={{
                        flex: 1,
                        alignItems: "flex-start",
                        justifyContent: "flex-start",
                        margin: 0,
                    }}
                >
                    <View style={{backgroundColor: "#28c370", width: "100%", overflow: "hidden"}}>
                        <Text style={styles.title}>در حال ارسال اطلاعات به سرور ، لطفا شکبیا باشد ...</Text>
                    </View>
                </Modal>
            </SafeAreaView>
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
        fontSize: 14,
        textAlign: "right",
        color: "#FFFF",
        padding: 15,
        paddingTop: 15,
        paddingBottom: 15,
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