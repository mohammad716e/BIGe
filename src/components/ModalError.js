import React, {Component} from 'react';
import ModalAlert from "./ModalAlert";

export default class ModalError extends Component {
    constructor(props) {
        super(props);
        const {title = "خطا", message = "خطایی رخ داه است"} = props;

        this.state = {
            title: title,
            message: message
        };
        this.buttons = [{text: "فهمیدم!", onPress: this.close.bind(this)}];
    }

    show({title = "خطا", message = "خطایی رخ داه است"}) {
        this.setState({title, message});
        this.refs.modal.show();
    }

    close() {
        this.refs.modal.close();
    }

    render() {
        const {title, message} = this.state;

        return (
            <ModalAlert ref="modal" {...this.props} message={message} title={title} buttons={this.buttons}/>
        );
    }
}
