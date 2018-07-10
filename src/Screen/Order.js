import React, { Component } from 'react';
// import {  } from 'react-native';
import { Button,Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";
import OrderList from "./OrderList";

class Order extends Component {


    constructor(props){
        super(props);
    }

    invoice = (no) => {
        console.log(this.props.navigation.navigate('invoice', { no: no }));
        
    }

    render() {
        let isLogin = true;
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(6, 92, 81)" }} androidStatusBarColor="rgb(4, 77, 66)">
                    <Body>
                        <Title>Order</Title>
                    </Body>
                </Header>
                <Content>
                    {
                        isLogin ? <OrderList navigate={this.invoice} /> : <Text>Anda harus login untuk melihat order</Text>
                    }
                </Content>
            </Container>
        );
    }

}

export default Order;