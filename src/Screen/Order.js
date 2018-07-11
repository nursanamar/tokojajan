import React, { Component } from 'react';
// import {  } from 'react-native';
import { Button,Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";
import OrderList from "./OrderList";
import { connect } from "react-redux";

class Order extends Component {


    constructor(props){
        super(props);
    }

    invoice = (no) => {
        this.props.navigation.navigate('invoice', { no: no });
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(6, 92, 81)" }} androidStatusBarColor="rgb(4, 77, 66)">
                    <Body>
                        <Title>Order</Title>
                    </Body>
                </Header>
                <Content>
                    {
                        this.props.isLogin ? <OrderList navigate={this.invoice} /> : <Text>Anda harus login untuk melihat order</Text>
                    }
                </Content>
            </Container>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin
    }
}

export default connect(mapStateToProps)(Order);