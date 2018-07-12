import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Spinner,Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";

class Help extends Component {

    render() {
        return (
            <WebView renderLoading={() => (<Spinner />)} startInLoadingState source={{ uri: "http://tokojajan.com/app/help" }} />            
        );
    }

}

export default Help;