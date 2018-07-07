import React, { Component } from 'react';
// import {  } from 'react-native';
import { Container,Header,Card,Left,Right,Body,Title,Content,Text,Icon,Grid,Row,Col } from "native-base";
import UserInfo from "../Components/UserInfo";
import Menu from "../Components/Menu";
import MenuItem from "../Components/MenuItem";
import Slide from "../Components/Slide";


class Home extends Component {

    render(){
        return (
            <Container>
                <Header>
                        <Body>
                            <Title>Home</Title>
                        </Body>
                        <Right>
                            <Icon name="locate" style={{color : 'white'}} />
                        </Right>
                </Header>
                <Content>
                    <UserInfo image="https://picsum.photos/80/80" saldo="50.000" poin="5" name="Nursan amar" />
                    <Menu>
                        <Grid>
                            <Row>
                                <Col>
                                    <MenuItem height={150} />
                                </Col>
                                <Col>
                                    <MenuItem height={150} />
                                </Col>
                            </Row>
                        </Grid>
                    </Menu>
                    <Slide>
                        <MenuItem height={250} />
                        <MenuItem height={250} />
                        <MenuItem height={250} />
                        <MenuItem height={250} />
                        <MenuItem height={250} />                    
                    </Slide>
                </Content>
            </Container>
        );
    }

}

export default Home;