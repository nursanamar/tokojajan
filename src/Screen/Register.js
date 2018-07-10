import React, { Component } from 'react';
// import {  } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";
import RegisterForm from "../Components/RegisterForm";

class Register extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading : false
        }
    }

    register = (data) => {
        console.log(data);
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(6, 92, 81)" }} androidStatusBarColor="rgb(4, 77, 66)">
                    <Body>
                        <Title>Register</Title>
                    </Body>
                </Header>
                <Content>
                   <RegisterForm isLoading={this.state.isLoading} submit={this.register} /> 
                </Content>
            </Container>
        );
    }

}

export default Register;