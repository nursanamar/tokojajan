import React, { Component } from 'react';
import { Card, CardItem, Text, Grid, Col, Row, Thumbnail, Badge, Left, Right,Body } from "native-base";


const MenuItem = (props) => {
    return (
        <Card>
            <CardItem cardBody>
                <Thumbnail square source={{ uri: props.image}} style={{height:props.height,width:null,flex:1}} />
            </CardItem>
            <CardItem>
                <Body>
                    <Text>{props.judul}</Text>
                </Body>
            </CardItem>
        </Card>
    )
}

export default MenuItem;