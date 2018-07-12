import React, { Component } from 'react';
import firebase from "react-native-firebase";

class Notif extends Component {
    componentDidMount(){
        const channel = new firebase.notifications.Android.Channel('channel', 'Channel', firebase.notifications.Android.Importance.Max)
            .setDescription('My apps test channel');
        firebase.notifications().android.createChannel(channel);


        this.notificationListener = firebase.notifications().onNotification((notification) => {
            console.log(notification);
            notification.android.setChannelId('channel');
            firebase.notifications().displayNotification(notification);
        });
    }

    componentWillUnmount() {
        this.notificationListener();
    }

    render() {
        return null;
    }


}

export default Notif;