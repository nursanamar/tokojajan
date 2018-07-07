import React, { Component } from 'react';
// import {  } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";

class Help extends Component {

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(6, 92, 81)" }} androidStatusBarColor="rgb(4, 77, 66)">
                    <Body>
                        <Title>Help</Title>
                    </Body>
                </Header>
                <Content>
                    <Text>Help</Text>
                </Content>
            </Container>
        );
    }

}

export default Help;