// import React from 'react';
// import {default as firebase, Notification, NotificationOpen} from "react-native-firebase";
//
// const TopicName = "mainTopic";
// const ChannelName = "mainChannel";
//
// const PushNotifications = {
//     initialize: () => {
//         this.getPermission();
//         this.addListeners();
//     },
//
//     addListeners: async () => {
//
//         const channel = new firebase.notifications.Android.Channel(ChannelName, ChannelName, firebase.notifications.Android.Importance.Max)
//             .setDescription(ChannelName).setSound('default');
//         firebase.notifications().android.createChannel(channel);
//
//
//         // this.messageListener = firebase.messaging().onMessage((message: RemoteMessage) => {
//         //     console.log("test1")
//         //     // Process your message as required
//         //     const notification = new firebase.notifications.Notification()
//         //         .setNotificationId('slm')
//         //         .setTitle(message.data.title)
//         //         .setBody(message.data.body);
//         //
//         //     if (Platform.OS === 'android') {
//         //         notification.android.setChannelId(channel.channelId);
//         //         notification.android.setSmallIcon('ic_notification');
//         //         notification.android.setPriority(firebase.notifications.Android.Priority.Max);
//         //         // notification.android.setColor('red');  // Reposit blue
//         //         // notification.android.setAutoCancel(true);
//         //     }
//         //     firebase.notifications().displayNotification(notification);
//         // });
//         //
//         //
//
//         // this.notificationDisplayedListener = firebase.notifications().onNotificationDisplayed((notification: Notification) => {
//         //     console.log("notificationDisplayed")
//         // });
//         //
//         //
//         //
//         // this.notificationListener = firebase.notifications().onNotification((notification: Notification) => {
//         //     // console.log("!",firebase.notifications());
//         //     // console.log("!!",firebase.notifications)
//         //     notification
//         //         .android.setChannelId('SogolChannel')
//         //         // .android.setLargeIcon('ic_notification')
//         //         // .android.setSmallIcon('ic_notification')
//         //         // .android.setColor("#F00000")
//         //
//         //         .android.setPriority(firebase.notifications.Android.Priority.Max)
//         //
//         //     firebase.notifications()
//         //         .displayNotification(notification);
//         //     console.log("notification" , notification)
//         // });
//         //
//         //
//         // this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen: NotificationOpen) => {
//         //     // Get the action triggered by the notification being opened
//         //     // const action = notificationOpen.action;
//         //     // // Get information about the notification that was opened
//         //     const notification: Notification = notificationOpen.notification;
//         //
//         //     console.log("notificationOpened");
//         //     console.log("notificationOpened" , notificationOpen);
//         //     //firebase.notifications().removeDeliveredNotification(notification.notificationId);
//         // });
//         //
//         //
//         //
//         // const notificationOpen: NotificationOpen = await firebase.notifications().getInitialNotification();
//         // if (notificationOpen) {
//         //     console.log("initial");
//         //     // App was opened by a notification
//         //     // Get the action triggered by the notification being opened
//         //     const action = notificationOpen.action;
//         //     // Get information about the notification that was opened
//         //     const notification: Notification = notificationOpen.notification;
//         //     console.log("initial" , notification)
//         // }
//
//     }
//
//     getPermission: async () => {
//         const enabled = await firebase.messaging().hasPermission();
//         if (enabled) {
//             firebase.messaging().subscribeToTopic(TopicName);
//         } else {
//             try {
//                 await firebase.messaging().requestPermission();
//                 firebase.messaging().subscribeToTopic(TopicName);
//             } catch (error) {
//                 // User has rejected permissions
//             }
//         }
//     },
//     createChannel() {
//         const channel = new firebase.notifications.Android.Channel('SogolChannel', 'SogolChannel', firebase.notifications.Android.Importance.Max)
//             .setDescription('sogol channel').setSound();
//         firebase.notifications().android.createChannel(channel);
//     }
//
//
//     // componentWillUnmount() {
//     //     // this.notificationDisplayedListener();
//     //     // this.notificationListener();
//     //     // this.notificationOpenedListener();
//     //     // this.messageListener();
//     // }
// };
//
//
//
//
//
