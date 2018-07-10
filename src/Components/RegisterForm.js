import React, { Component } from 'react';
import { Card, CardItem, Form, Input, Item, Label, Button, Text, Body, Right, Left, Spinner } from "native-base";


class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            first_name: null,
            last_name: null,
            no_telp:null,
            password:null,
            confirm_pass : null
        }

        this.submit = this.submit.bind(this);
    }

    submit() {
        let data = this.state;
        if (this.state.first_name === null || this.state.last_name === null || this.state.no_telp === null || this.state.password === null || this.state.confirm_pass === null ){
            return
        }
        this.props.submit(data);
    }

    render() {
        return (
            <Card>
                <Form>
                    <Item floatingLabel>
                        <Label>
                            Nama Depan
                    </Label>
                        <Input onChangeText={(text) => { this.setState({ first_name: text }) }} />
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            Nama Belakang
                    </Label>
                        <Input onChangeText={(text) => { this.setState({ last_name: text }) }} />
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            Nomor Telepon
                    </Label>
                        <Input onChangeText={(text) => { this.setState({ no_telp: text }) }} />
                    </Item>
                    <Item floatingLabel>
                        <Label>
                            Password
                    </Label>
                        <Input onChangeText={(text) => { this.setState({ password: text }) }} />
                    </Item>
                    <Item floatingLabel last >
                        <Label>
                            Konfirmasi password
                    </Label>
                        <Input onChangeText={(text) => { this.setState({ confirm_pass: text }) }} />
                    </Item>
                </Form>
                <CardItem>
                    <Right />
                    <Body>
                        <Button onPress={this.submit} full >
                            {
                                this.props.isLoading ? <Spinner /> : <Text>Daftar</Text>
                            }
                        </Button>
                    </Body>
                    <Left />
                </CardItem>
            </Card>
        )
    }
}

export default RegisterForm;