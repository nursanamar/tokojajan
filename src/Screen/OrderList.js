import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";
import OrderItem from "../Components/OrderItem";
import { orderList } from "../../exampleData";
import { createStackNavigator } from "react-navigation";


class OrderList extends Component {

    constructor(props){
        super(props);
    }

    render() {
        let datum = orderList;
        let list = [];
        datum.forEach((data,key) => {
            list.push(
                <TouchableOpacity key={key} onPress={() => {this.props.navigate(data.no)}} >
                    <OrderItem no={data.no} status={data.status_order} />
                </TouchableOpacity>
            )
        })
        return (
            <Card>
                {list}
            </Card>
        );
    }

}

export default OrderList;