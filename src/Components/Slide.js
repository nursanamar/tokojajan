import React, { Component } from 'react';
import { Card, CardItem, Text, Grid, Col, Row, Thumbnail, Badge, Left, Right, Body } from "native-base";
import Swiper from "react-native-swiper";

const Slide = (props) => {
    return (
        <Card transparent >
            <CardItem>
                <Left>
                    <Text>Slide</Text>
                </Left>
                <Right>
                    <Text>See all</Text>
                </Right>
            </CardItem>
            <CardItem>
                <Swiper height={300} >
                    {props.children}
                </Swiper>
            </CardItem>
        </Card>
    )
}

export default Slide;