import React, { Component } from 'react';
import { createBottomTabNavigator,createStackNavigator } from "react-navigation";
import Home from "../Screen/Home";
import Order from "../Screen/Order";
import { Icon } from "native-base";
import Help from "../Screen/Help";
import Account from "../Screen/Account";
import Register from "../Screen/Register";
import Invoice from "../Screen/Invoice";
import Menu from "../Screen/Menu";

export const AccountStack = createStackNavigator({
    login : Account,
    register: Register
},{
    headerMode : "none"
})

export const OrderStack = createStackNavigator({
    orderList : Order,
    invoice : Invoice
},{
    headerMode : 'none'
})

export const MenuStack = createStackNavigator({
    front : Home,
    menu : Menu
},{
    headerMode : 'none'
})

export const HomeStack = createBottomTabNavigator({
    home : MenuStack,
    order : OrderStack,
    help : Help,
    akun : AccountStack
},{
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'home') {
                    iconName = `people`;
                } else if (routeName === 'order') {
                    iconName = `heart`;
                } else if (routeName === 'help') {
                    iconName = `help-circle`;
                } else if (routeName === 'akun') {
                    iconName = `person`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
        },
}) 