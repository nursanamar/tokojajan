import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Spinner, Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";


const Menu = (props) => {
    return (

        <WebView renderLoading={() => (<Spinner />)} startInLoadingState source={{ uri: props.url}} />

    )
}

export default Menu;