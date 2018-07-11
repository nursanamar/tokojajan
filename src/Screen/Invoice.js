import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";


const Invoice = (props) => {
    return (
        <WebView source={{ uri: 'http://tokojajan.com/pesanan/'+props.navigation.state.params.no}} />
    )
}

export default Invoice;