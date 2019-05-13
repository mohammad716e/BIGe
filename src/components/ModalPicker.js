import React from 'react';
import EStyleSheet from "react-native-extended-stylesheet";
import {Text, View, TouchableOpacity} from "react-native";
import ModalExtended from "./ModalExtended";

export default class ModalPicker extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: -1,
        };
    }

    show() {
        this.refs.modal.show();
    }

    close() {
        this.refs.modal.close();
    }

    pick(item) {
        this.close();
        const {onPick} = this.props;
        this.setState({selectedIndex: item.index});
        onPick ? onPick(item) : null;
    }

    _renderItem(item, index) {
        const {selectedIndex} = this.state;
        const isSelected = selectedIndex === index;
        return <TouchableOpacity key={index} onPress={this.pick.bind(this, {index, ...item})}>
            <Text style={[styles.filterItem, isSelected ? styles.filterSelectedItem : {}]}>{item.title}</Text>
        </TouchableOpacity>
    }

    _renderItems() {
        return this.props.items.map(this._renderItem.bind(this))
    }

    render() {
        return (
            <ModalExtended ref="modal" {...this.props}>
                <View style={{flex: 1, flexDirection: "column"}}>
                    {
                        this._renderItems()
                    }
                </View>
            </ModalExtended>
        );
    }
}

const styles = EStyleSheet.create({
    filterItem: {
        fontSize: 18,
        fontFamily: "IRANSansMobile",
        textAlign: "right",
        padding: 5,
    },
    filterSelectedItem: {
        color: "#2a4288"
    },
    buttonContainer: {
        marginLeft: "3%",
        marginRight: "3%",
    },
});