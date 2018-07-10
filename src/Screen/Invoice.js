import React, { Component } from 'react';
// import {  } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";


const Invoice = (props) => {
    return (
        <Text>{"Invoice Number "+props.navigation.state.params.no}</Text>
    )
}

export default Invoice;