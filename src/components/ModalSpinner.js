import React from 'react';
import {ActivityIndicator, Modal, Text, View} from 'react-native';
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    background: {
        justifyContent: 'center',
        alignItems: 'center',
        width: "80%",
        height: "30%",
        backgroundColor: 'rgba(0,0,0,0)',
        borderRadius: 4,
    },
    textContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContent: {
        fontSize: 14,
        color: "#FFF",
        textAlign: "center",
        fontFamily: "IRANSansMobile",
        marginTop: 10,
        marginBottom: 10
    },
    endButton: {
        backgroundColor: "#CCC",
        borderRadius: 5,

    },
    endButtonText: {
        padding: 5,
        color: "#FFF",
        textAlign: "center",
        fontFamily: "IRANSansMobile",
        fontSize: 18,
    }
});

export default class ModalSpinner extends React.Component {
    _handleOnRequestClose = () => {
        const {close} = this.props;
        close ? close() : undefined;
    };

    constructor(props) {
        super(props);
        const {visible} = props;
        this.state = {
            isVisible: visible,
        };
    }

    componentWillReceiveProps(props) {
        const {visible} = props;
        this.setState({isVisible: visible});
    }

    hide() {
        this.setState({isVisible: false});
    }

    show() {
        this.setState({isVisible: true});
    }

    render() {
        const {isVisible} = this.state;
        return (
            <Modal
                animationType={this.props.animation}
                onRequestClose={this._handleOnRequestClose.bind(this)}
                supportedOrientations={['landscape', 'portrait']}
                transparent
                style={{flex: 1,}}
                visible={isVisible}>
                <View
                    style={[
                        styles.container,
                        {backgroundColor: this.props.overlayColor}
                    ]}
                >
                    <View style={styles.background}>
                        <View style={[styles.textContainer]}>
                            <ActivityIndicator
                                color={this.props.color}
                                size={this.props.size}
                            />
                            <Text style={styles.textContent}>{this.props.textContent}</Text>
                        </View>
                    </View>
                </View>
            </Modal>
        );
    }
}
