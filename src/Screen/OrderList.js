import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Spinner,Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";
import OrderItem from "../Components/OrderItem";
import { connect } from "react-redux";
import { orderList } from "../config/Api";
import { createStackNavigator } from "react-navigation";


class OrderList extends Component {

    constructor(props){
        super(props);
        this.state = {
            data : [],
            isLoading : true,
        }
    }

    componentDidMount(){
        orderList(this.props.token,this.props.userId,(data) => {
            console.log(data);
            this.setState({
                data : data,
                isLoading : false
            })
        })
    }

    render() {
        let datum = this.state.data;
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
                {this.state.isLoading ? <Spinner /> : list}
            </Card>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        token : state.user.token,
        userId : state.user.id
    }
}

export default connect(mapStateToProps)(OrderList);