import React, { Component } from 'react';
// import {  } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";

class Register extends Component {

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(6, 92, 81)" }} androidStatusBarColor="rgb(4, 77, 66)">
                    <Body>
                        <Title>Register</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>Order</Text>
                </Content>
            </Container>
        );
    }

}

export default Register;