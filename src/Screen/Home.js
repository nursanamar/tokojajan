import React, { Component } from 'react';
import { TouchableOpacity, PermissionsAndroid } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text, Icon, Grid, Row, Col } from "native-base";
import UserInfo from "../Components/UserInfo";
import Menu from "../Components/Menu";
import MenuItem from "../Components/MenuItem";
import Slide from "../Components/Slide";
import { connect } from 'react-redux'


class Home extends Component {

    constructor(props) {
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

    openMenu = (url) => {
        this.props.navigation.navigate('menu', { url: url });
    }

    render() {
        let menu = [
            {
                name: 'MoTop up',
                image: "https://picsum.photos/150/200",
                url: "https://tokojajan.com/app/top-up"
            },
            {
                name: 'MoPulsa',
                image: "https://picsum.photos/150/200",
                url: "https://tokojajan.com/app/pulsa"
            },
            {
                name: 'MoBelanja',
                image: "https://picsum.photos/150/200",
                url: "https://tokojajan.com/app/mart"
            },
            {
                name: 'MoFood',
                image: "https://picsum.photos/150/200",
                url: "https://tokojajan.com/app/food"
            }
        ]
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
                        this.props.isLogin ? <UserInfo image={"https://tokojajan.com/static/upload/" + this.props.user.foto} saldo={this.props.user.saldo} poin={this.props.user.point} name={this.props.user.name} /> : null
                    }
                    <Menu>
                        <Grid>
                            <Row>
                                <Col>
                                    <TouchableOpacity onPress={() => {
                                        this.openMenu('https://tokojajan.com/app/top-up')
                                    }} >
                                        <MenuItem image="https://picsum.photos/150/200" judul='MoTop Up' height={150} />
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity onPress={() => {
                                        this.openMenu('https://tokojajan.com/app/pulsa')
                                    }} >
                                        <MenuItem image="https://picsum.photos/150/200" judul='MoPulsa' height={150} />
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <TouchableOpacity onPress={() => {
                                        this.openMenu('https://tokojajan.com/app/mart')
                                    }} >
                                        <MenuItem image="https://picsum.photos/150/200" judul='MoBelanja' height={150} />
                                    </TouchableOpacity>
                                </Col>
                                <Col>
                                    <TouchableOpacity onPress={() => {
                                        this.openMenu('https://tokojajan.com/app/food')
                                    }} >
                                        <MenuItem image="https://picsum.photos/150/200" judul="MoFood" height={150} />
                                    </TouchableOpacity>
                                </Col>
                            </Row>
                        </Grid>
                    </Menu>
                    <Slide>
                        <TouchableOpacity style={{height:300}} onPress={() => {
                            this.openMenu('https://tokojajan.com/app/top-up')
                        }} >
                            <MenuItem image="https://picsum.photos/150/200" judul='MoTop Up' height={250} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:300}} onPress={() => {
                            this.openMenu('https://tokojajan.com/app/pulsa')
                        }} >
                            <MenuItem image="https://picsum.photos/150/200" judul='MoPulsa' height={250} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:300}} onPress={() => {
                            this.openMenu('https://tokojajan.com/app/mart')
                        }} >
                            <MenuItem image="https://picsum.photos/150/200" judul='MoBelanja' height={250} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:300}} onPress={() => {
                            this.openMenu('https://tokojajan.com/app/food')
                        }} >
                            <MenuItem image="https://picsum.photos/150/200" judul="MoFood" height={250} />
                        </TouchableOpacity>
                    </Slide>
                </Content>
            </Container>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLogin: state.isLogin,
        user: state.user
    }
}


export default connect(mapStateToProps)(Home);