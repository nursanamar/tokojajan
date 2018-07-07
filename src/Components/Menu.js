import React, { Component } from 'react';
import { Card, CardItem, Text, Grid, Col, Row, Thumbnail, Badge, Left, Right } from "native-base";

const Menu = (props) => {
    return (
        <Card transparent>
            <CardItem>
                <Text>Menu</Text>
            </CardItem>
            <CardItem>
                {props.children}
            </CardItem>
        </Card>
    )
}

export default Menu;