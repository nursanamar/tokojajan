import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text,Grid,Row,Col,Button,Spinner } from "native-base";
import LoginForm from "../Components/LoginForm";
import { connect } from "react-redux";
import { login } from "../config/Api";

class Account extends Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading : false
        }
    }

    logout = () => {
        this.setState({
            isLoading : true
        })
        this.props.dispatch({type : 'logout'});
        this.setState({
            isLoading : false
        })
    }

    login = (email,pass) => {
        this.setState({
            isLoading : true
        })
        login(email,pass,"",(json) => {
            let data = {
                id : json.data.id,
                name : json.data.first_name,
                foto: json.data.thumbnail,
                saldo: json.saldo.saldo,
                point: json.saldo.bagi_hasil,
            }
            this.props.dispatch({ type : "login",data : data });
            this.setState({
                isLoading : false
            })
        })
    }

    render() {
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(6, 92, 81)" }} androidStatusBarColor="rgb(4, 77, 66)">
                    <Body>
                        <Title>Account</Title>
                    </Body>
                </Header>
                <Content>
                    <Grid>
                        <Row>

                        </Row>
                        <Row>
                            <Col>
                                {
                                    this.props.isLogin ? 
                                        <Button onPress={this.logout} >
                                            <Text>Log out</Text>
                                        </Button> 
                                        :
                                        <LoginForm isLoading={this.state.isLoading} submit={this.login} />
                                }
                            </Col>
                        </Row>
                        <Row>

                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }

}

const mapStateToProps = state => {
    return {
        isLogin : state.isLogin
    }
}

export default connect(mapStateToProps)(Account);