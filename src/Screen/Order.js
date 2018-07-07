import React, { Component } from 'react';
// import {  } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";

class Order extends Component {

    render() {
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Order</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>Order</Text>
                </Content>
            </Container>
        );
    }

}

export default Order;