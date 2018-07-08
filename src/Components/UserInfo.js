import React, { Component } from 'react';
import { Card, CardItem, Text, Grid, Col, Row, Thumbnail, Badge, Left, Right } from "native-base";


const UserInfo = (props) => {
    return (
        <Card>
            <CardItem bordered>
                <Thumbnail style={{ marginRight: 15 }} source={{ uri: props.image }} />
                <Grid>
                    <Row>
                        <Text style={{ fontSize: 14 }}>{props.name}</Text>
                    </Row>
                    <Row>
                        <Badge success style={{ marginRight: 10 }} >
                            <Text style={{ fontSize: 14 }}>{"Poin : " + props.poin.toLocaleString('id-ID')}</Text>
                        </Badge>
                        <Badge style={{ backgroundColor: "rgb(46, 62, 78)" }} >
                            <Text style={{ fontSize: 14 }}>{"Saldo : Rp " + props.saldo.toLocaleString('id-ID')}</Text>
                        </Badge>
                    </Row>
                </Grid>
                <Right />
            </CardItem>
        </Card>
    )
}

export default UserInfo;