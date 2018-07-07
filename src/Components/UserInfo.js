import React, { Component } from 'react';
import { Card,CardItem,Text,Grid,Col,Row,Thumbnail,Badge, Left, Right } from "native-base";


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
                            <Text style={{ fontSize: 14 }}>{"Poin : "+props.poin}</Text>
                        </Badge>
                        <Badge success>
                            <Text style={{ fontSize: 14 }}>{"Saldo : Rp "+props.saldo}</Text>
                        </Badge>
                    </Row>
                </Grid>
                <Right />
            </CardItem>
        </Card>
    )
}

export default UserInfo;