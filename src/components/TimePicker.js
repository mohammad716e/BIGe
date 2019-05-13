import React, {Component} from 'react';
export default class TimePicker extends Component {
}
// import Picker from 'react-native-picker';
//
// export default class TimePicker extends Component {
//     static defaultProps = {
//         style: {},
//         textStyle: {},
//         pickerConfirmBtnText: 'انتخاب',
//         pickerTitleText: 'ساعت را انتخاب کنید',
//         pickerCancelBtnText: 'انصراف',
//         pickerToolBarFontSize: 14,
//         pickerFontSize: 18,
//         color: "#FFF",
//
//         pickerToolBarBg: [200, 200, 200, 1],
//
//         pickerConfirmBtnColor: [1, 103, 183, 1],
//         pickerCancelBtnColor: [1, 103, 183, 1],
//
//         pickerTitleColor: [20, 20, 20, 1],
//         pickerBg: [255, 255, 255, 255],
//
//         onConfirm: (data) => {
//         },
//         onCancel: (data) => {
//         },
//         onSelect: (data) => {
//         },
//
//     };
//
//     renderPicker = () => {
//         const {
//             pickerConfirmBtnText,
//             pickerTitleText,
//             pickerCancelBtnColor,
//             pickerToolBarFontSize,
//             pickerToolBarBg,
//             pickerConfirmBtnColor,
//             pickerTitleColor,
//             pickerBg,
//             pickerCancelBtnText
//         } = this.props;
//
//         const {hour, minute} = this.state;
//
//         Picker.init({
//             pickerData: this._createDates(),
//
//             pickerConfirmBtnText,
//             pickerTitleText,
//             pickerCancelBtnColor,
//             pickerToolBarFontSize,
//             pickerToolBarBg,
//             pickerConfirmBtnColor,
//             pickerTitleColor,
//             pickerBg,
//             pickerFontSize: 17,
//             wheelFlex: [1, 1],
//             pickerTextEllipsisLen: 1000,
//             pickerFontFamily: "IRANSansMobile",
//             pickerCancelBtnText,
//
//             selectedValue: [hour, minute],
//
//             onPickerConfirm: data => {
//                 const hour = data[0];
//                 const minute = data[1];
//
//                 this.setState({hour, minute});
//
//                 this.props.onConfirm({
//                     hour: hour,
//                     minute: minute,
//                     text: `${hour}:${minute}`,
//                     value: `${hour.length === 1 ? "0" + hour : hour}:${minute.length === 1 ? "0" + minute : minute}`,
//                 });
//             },
//
//             onPickerCancel: data => {
//                 this.props.onCancel({
//                     hour: data[0], minute: data[1]
//                 });
//             },
//
//             onPickerSelect: data => {
//                 this.props.onSelect({
//                     hour: data[0], minute: data[1]
//                 });
//             }
//
//         });
//         Picker.hide();
//     };
//
//     constructor(props) {
//         super(props);
//         const values = props.initialValue ? props.initialValue.split(":") : [undefined, undefined];
//
//         const hour = values[0] && values[0].startsWith("0") ? values[0].substring(1) : values[0];
//         const minute = values[1] && values[1].startsWith("0") ? values[0].substring(1) : values[1];
//
//         this.state = {
//             hour,
//             minute
//         };
//         this.renderPicker();
//     }
//
//     show() {
//         this.renderPicker();
//         Picker.show();
//     }
//
//
//     close() {
//         Picker.hide();
//     }
//
//     render() {
//         return null;
//     }
//
//     _createDates() {
//         const data = [];
//         let minuteArray = [];
//         for (let minute = 0; minute < 60; minute++) {
//             minuteArray.push(minute);
//         }
//         let hourArray = [];
//         for (let hour = 0; hour < 24; hour++) {
//             hourArray.push(hour);
//         }
//         data.push(hourArray);
//         data.push(minuteArray);
//         return data;
//     }
// }
