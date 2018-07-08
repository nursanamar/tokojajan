import React, { Component } from 'react';
import { Card, CardItem, Form, Input, Item, Label, Button, Text,Body,Right,Left } from "native-base";


class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : null,
            pass : null,
        }

        this.submit = this.submit.bind(this);
    }

    submit(){
        if(this.state.email == null || this.state.pass == null){
            return 0;
        }

        this.props.submit(this.state.email,this.state.pass);
        console.log("login form")
    }

    render() {
        return (
            <Card>
                <Form>
                    <Item floatingLabel>
                        <Label>
                            Email
                    </Label>
                        <Input onChangeText={(text) => { this.setState({email : text}) }} />
                    </Item>
                    <Item floatingLabel last >
                        <Label>
                            Password
                    </Label>
                        <Input onChangeText={(text) => { this.setState({pass: text}) }} />
                    </Item>
                </Form>
                <CardItem>
                    <Right/>
                    <Body>
                        <Button onPress={this.submit} full >
                            <Text>Login</Text>
                        </Button>
                    </Body>
                    <Left/>
                </CardItem>
            </Card>
        )
    }
}

export default LoginForm;