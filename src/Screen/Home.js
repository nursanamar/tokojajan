import React, { Component } from 'react';
import { TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text, Icon, Grid, Row, Col } from "native-base";
import UserInfo from "../Components/UserInfo";
import Menu from "../Components/Menu";
import MenuItem from "../Components/MenuItem";
import Slide from "../Components/Slide";
import { connect } from 'react-redux'


class Home extends Component {

    constructor(props){
        super(props);
    }

    async requestLocation() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                {
                    'title': 'Akses Lokasi',
                    'message': 'Aplikasi ini butuh akses lokasi'
                }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("allow")
            } else {
                console.log("denied")
            }
        } catch (err) {
            return 0;
        }
    }

    render() {  
        return (
            <Container>
                <Header style={{ backgroundColor: "rgb(6, 92, 81)" }} androidStatusBarColor="rgb(4, 77, 66)">
                    <Body>
                        <Title>Home</Title>
                    </Body>
                    <Right>
                        <TouchableOpacity onPress={this.requestLocation.bind(this)} >
                            <Icon name="locate" style={{ color: 'white' }} />
                        </TouchableOpacity>
                    </Right>
                </Header>
                <Content>
                    {
                        this.props.isLogin ? <UserInfo image="https://picsum.photos/80/80" saldo={this.props.user.saldo} poin={this.props.user.point} name={this.props.user.name} /> : null
                    }
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

const mapStateToProps = (state) => {
    return {
        isLogin : state.isLogin,
        user : state.user
    }
}


export default connect(mapStateToProps)(Home);