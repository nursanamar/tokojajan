import React, { Component } from 'react';
import { createBottomTabNavigator } from "react-navigation";
import Home from "../Screen/Home";
import Order from "../Screen/Order";
import { Icon } from "native-base";
import Help from "../Screen/Help";
import Account from "../Screen/Account";

export const HomeStack = createBottomTabNavigator({
    home : Home,
    order : Order,
    help : Help,
    akun : Account
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