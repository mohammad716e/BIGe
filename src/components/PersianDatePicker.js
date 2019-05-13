import React, {Component} from 'react';

export default class PersianDatePicker extends Component {
}

// import {Text, TouchableWithoutFeedback, View} from 'react-native';
// import Picker from 'react-native-picker';
// import moment from 'moment-jalaali';
// import {getMonthNumber, getMonthString} from "../helpers/StringHelper";
//
// export default class PersianDatePicker extends Component {
//     static defaultProps = {
//         year: 1396,
//         month: 1,
//         day: 1,
//
//         style: {},
//         textStyle: {},
//         pickerConfirmBtnText: 'انتخاب',
//         pickerTitleText: 'تاریخ را انتخاب کنید',
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
//         yearCount: 30,
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
//         const {year, month, day} = this.state;
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
//             wheelFlex: [1, 3, 1],
//             pickerTextEllipsisLen: 1000,
//             pickerFontFamily: "IRANSansMobile",
//             pickerCancelBtnText,
//
//             selectedValue: [year, getMonthString(month), day],
//
//             onPickerConfirm: data => {
//                 data[1] = getMonthNumber(data[1]);
//                 this.setState({year: data[0], day: data[2], month: data[1]});
//                 this.props.onConfirm({
//                     year: data[0],
//                     day: data[2],
//                     month: data[1],
//                     jalaliString: `${data[2]} ${getMonthString(data[1])} ${data[0]}`,
//                     value: `${data[0]}/${data[1].toString().length === 1 ? "0" + data[1] : data[1]}/${data[2].length === 1 ? "0" + data[2] : data[2]}`,
//                 });
//             },
//
//             onPickerCancel: data => {
//                 data[1] = getMonthNumber(data[1]);
//                 this.props.onCancel(data);
//             },
//
//             onPickerSelect: data => {
//                 data[1] = getMonthNumber(data[1]);
//                 this.props.onSelect(data);
//             }
//
//         });
//         Picker.hide();
//     };
//
//     constructor(props) {
//         super(props);
//         const values = props.initialValue ? props.initialValue.split("/") : [undefined, undefined, undefined];
//         console.log(values, getMonthString(values[1]));
//
//         const month = values[1] ? getMonthString(values[1]) : values[1];
//         const day = values[2] && values[2].startsWith("0") ? values[2].substring(1) : values[2];
//
//         console.log(values);
//
//         this.state = {
//             year: values[0],
//             month,
//             day,
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
//
//         const {year, month, day} = this.getSelectedDate();
//         return (
//             <TouchableWithoutFeedback onPress={() => Picker.show()}>
//                 <View style={[styles.containerStyle, this.props.style]}>
//                     <Text style={[styles.textStyle, this.props.textStyle]}>
//                         {year}
//                     </Text>
//                     <Text style={[styles.textStyle, this.props.textStyle]}>
//                         {getMonthString(month)}
//                     </Text>
//                     <Text style={[styles.textStyle, this.props.textStyle]}>
//                         {day}
//                     </Text>
//                 </View>
//             </TouchableWithoutFeedback>
//         );
//     }
//
//     getSelectedDate() {
//         let year, day, month;
//         if (!this.state.day) {
//             if (!this.props.selectedDate) {
//                 const _now = moment();
//                 year = _now.jYear();
//                 month = _now.jMonth() + 1;
//                 day = _now.jDate();
//             } else {
//                 const date = this.props.selectedDate.split('/');
//                 year = date[0];
//                 month = date[1];
//                 day = date[2];
//             }
//         } else {
//             year = this.state.year;
//             month = this.state.month;
//             day = this.state.day;
//         }
//         return {year, day, month};
//     }
//
//     _createDates() {
//         let MaxMonth;
//         let MaxYear;
//         let MaxDay;
//         let m;
//
//         // if (!this.props.maxDate) {
//         //     const maxDate = moment();
//         //     MaxMonth = maxDate.jMonth();
//         //     MaxYear = maxDate.jYear();
//         //     MaxDay = maxDate.jDate();
//         // }else
//         // }
//         if (this.props.yearCount) {
//             const maxDate = moment();
//             maxDate.add(this.props.yearCount, 'jYear');
//             MaxYear = maxDate.jYear();
//         } else {
//             m = moment(this.props.maxDate, 'jYYYY/jM/jD');
//             MaxMonth = m.jMonth();
//             MaxYear = m.jYear();
//             MaxDay = m.jDate();
//         }
//
//         m = this.props.minDate ? moment(this.props.minDate, 'jYYYY/jM/jD') : moment();
//
//         const month = m.jMonth();
//         const year = m.jYear();
//         const day = m.jDate();
//
//         let data = [];
//
//         for (let i = 0; m.jYear() <= MaxYear; i++) {
//             const _year = m.jYear();
//
//             let months = [];
//             for (let j = 0; j < 12; j++) {
//                 let daysLength = (moment.jIsLeapYear(_year)) ? 30 : 29;
//                 if (j !== 11) {
//                     daysLength = 30;
//                 }
//                 if (j <= 5) {
//                     daysLength = 31
//                 }
//                 if (_year === MaxYear && j > MaxMonth) break;
//                 if (year === _year && j < month) continue;
//                 let days = [];
//                 for (let k = 0; k < daysLength; k++) {
//                     if (_year === MaxYear && j === MaxMonth && k === MaxDay) break;
//                     if (_year === year && month === j && k < day - 1) continue;
//                     days.push(k + 1);
//                 }
//                 let _days = {};
//                 _days[getMonthString(j + 1)] = days;
//                 months.push(_days);
//             }
//             let _data = {};
//             _data[_year] = months;
//             data.push(_data);
//             m.add(1, 'jYear');
//         }
//         return data;
//
//     }
// }
//
// const styles = {
//     containerStyle: {
//         padding: 3,
//         justifyContent: 'space-around',
//         flexDirection: 'row',
//         alignItems: 'center',
//         borderColor: '#424242',
//         borderWidth: 1,
//         borderRadius: 10,
//         marginLeft: 25,
//         marginRight: 25,
//         backgroundColor: 'white',
//         minWidth: 150,
//     },
//     textStyle: {
//         // fontFamily: "IRANSansMobile",
//     }
// };