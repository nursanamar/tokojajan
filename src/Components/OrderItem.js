import React, { Component } from 'react';
import { H1,Card, CardItem, Text, Grid, Col, Row, Thumbnail, Badge, Left, Right, Body } from "native-base";


const OrderItem = (props) => {
    return (
        <CardItem bordered >
            <Body>
                <H1>{props.no}</H1>
                <Text>{props.status}</Text>
            </Body>
        </CardItem>
    )
}

export default OrderItem;