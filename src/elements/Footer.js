import React, {PureComponent} from "react";
import EStyleSheet from "react-native-extended-stylesheet";
import {Image, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";


import {Actions} from "react-native-router-flux";

class Footer extends PureComponent {
    constructor(props) {
        super(props);
        this.footerItems = [
            {
                id: 1,
                source: require("../assets/img/settings.png"),
                sourceActive: require("../assets/img/settings-active.png"),
                text: "تنظیمات",
                onPress: Actions.notification
            },
            {
                id: 2,
                sourceBase: require("../assets/img/tab-bottom.png"),
                source: require("../assets/img/pay-tab-active.png"),
                sourceActive: require("../assets/img/pay-tab.png"),
                big: true,
                onPress: Actions.home
            },
            {
                id: 3,
                source: require("../assets/img/check.png"),
                sourceActive: require("../assets/img/check-active.png"),
                text: "تراکنش ها",
                onPress: Actions.confirm
            },
        ];

        this.state = {
            currentId: 2,
        };
    }

    _renderNotificationCount() {
        return (
            <View style={styles.countContainer}>
                <Text style={styles.countText}>9+</Text>
            </View>
        );
    }

    itemPress({onPress, id}) {
        this.setState({currentId: id});
        onPress ? onPress() : null;
    }

    _renderItem(item, index) {
        const {big = false, id, text, sourceActive, sourceBase, source, onPress} = item;
        const {currentId} = this.state;
        const isActive = currentId === id;
        if (big) {
            return <View
                key={index}
                style={[{
                    flex: 1.3,
                    backgroundColor: "transparent",
                }]}
            >
                <View style={[{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                    flexDirection: "column",
                }]}>
                    <Image
                        style={{width: "100%", position: "absolute", bottom: 0}}
                        resizeMode={"stretch"}
                        source={sourceBase}
                    />
                    <TouchableOpacity
                        onPress={this.itemPress.bind(this, item)}
                        style={{
                            width: "100%",
                        }}
                    >
                        <Image style={
                            [{
                                width: "100%",
                                marginBottom: 30
                            }]}
                               resizeMode={"contain"}
                               source={isActive ? sourceActive : source}/>
                    </TouchableOpacity>
                </View>
            </View>
        }
        return (
            <TouchableWithoutFeedback
                key={index}
                onPress={this.itemPress.bind(this, item)}
            >
                <View style={styles.footerImageContainer}>
                    <Image style={[styles.footerItemImage]}
                           resizeMode={"contain"}
                           source={isActive ? sourceActive : source}/>
                    <Text style={styles.footerItemText}>{text}</Text>
                    <View style={{width: "60%", borderBottomWidth: isActive ? 3 : 0, borderBottomColor: "#7f74c7"}}/>
                </View>
            </TouchableWithoutFeedback>
        );

    }

    render() {
        return (
            <View style={styles.footerContainer}>
                {this.footerItems.map(this._renderItem.bind(this))}
            </View>
        );
    }
}

export const styles = EStyleSheet.create({
    footerContainer: {
        height: 220,
        width: "100%",
        flexDirection: "row",
        position: "absolute",
        bottom: 0,
        elevation: 1,
        alignItems: "flex-end"
    },
    footerImageContainer: {
        flex: 1,
        width: "100%",
        borderTopWidth: 1,
        height: 68,
        padding: 10,
        borderTopColor: "#ddd",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
        flexDirection: "column"
    },
    footerItemImage: {
        width: "50%",
        height: "50%",
        // backgroundColor: "#FF0"
    },
    footerItemText: {
        fontFamily: "$font",
        fontSize: 10,
        marginTop: 5,
    },
    footerActiveItem: {
        width: "100%",
        height: 4,
        position: "absolute",
        bottom: 3,
        backgroundColor: "#FFF",
    },

    countContainer: {
        backgroundColor: "#cc2229",
        width: 23,
        height: 23,
        borderRadius: 23,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: 13,
        right: 13,
    },
    countText: {
        fontFamily: "$font",
        color: "#FFF",
        textAlign: "center",
        fontSize: 13
    }
});

export default Footer;//connect(mapStateToProps, mapDispatchToProps)();