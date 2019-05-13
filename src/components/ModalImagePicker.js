import React from 'react';
import ImagePicker from "react-native-image-picker";
import ModalExtended from "./ModalExtended";
import {PermissionsAndroid, Text, TouchableOpacity, View} from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import ImageResizer from "react-native-image-resizer";

const options = {
    title: "انتخاب عکس",
    mediaType: "photo",
    noData: true,
};

export default class ModalImagePicker extends React.Component {
    constructor(props) {
        super(props);
        this.requestCameraPermission()
    }

    goToGallery() {
        this.refs.modal.close();
        ImagePicker.launchImageLibrary(options, this.handleImagePicker.bind(this));
    }

    goToCamera() {
        this.refs.modal.close();
        ImagePicker.launchCamera(options, this.handleImagePicker.bind(this));
    }

    async handleImagePicker(response) {
        const {onError, onCancel, compressedImage = false, resizeSize = null} = this.props;
        const {error = null, didCancel = null, uri} = response;
        if (error) {
            onError ? onError(response) : alert(error);
        } else if (didCancel) {
            onCancel ? onCancel() : null;
        } else {
            let resizeImage = {};
            let imageData = response;
            if (compressedImage || resizeSize) {
                resizeImage = await ImageResizer.createResizedImage(uri, 1000, 1000, "JPEG", 60, 90);
                imageData = resizeImage;
            }
            const {onPickImage} = this.props;
            onPickImage ? onPickImage({
                compressedImageData: resizeImage,

                imageData: imageData,

                originalImageData: response,
                id: new Date().getTime()
            }) : null;
        }
    }

    async requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);
            const granted2 = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);

            if (!(granted === PermissionsAndroid.RESULTS.GRANTED && granted2 === PermissionsAndroid.RESULTS.GRANTED)) {
            }
        } catch (err) {
            console.warn(err)
        }
    }

    show() {
        this.refs.modal.show();
    }

    close() {
        this.refs.modal.close();
    }

    render() {
        const {title = "انتخاب عکس از ..."} = this.props;
        return (
            <ModalExtended title={title} center ref="modal">
                <View style={{
                    flex: 1,
                    width: "100%",
                    flexDirection: "row",
                    paddingTop: 20,
                    paddingBottom: 20,
                    justifyContent: "space-around"
                }}>
                    <TouchableOpacity style={styles.button} onPress={this.goToCamera.bind(this)}>
                        <Text style={styles.buttonText}>دوربین</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={this.goToGallery.bind(this)}>
                        <Text style={styles.buttonText}>گالری</Text>
                    </TouchableOpacity>
                </View>
            </ModalExtended>
        );
    }
}


const styles = EStyleSheet.create({
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