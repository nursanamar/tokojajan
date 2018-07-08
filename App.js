/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AsyncStorage
} from 'react-native';
import { HomeStack } from "./src/config/Route";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { reducer } from "./src/config/Reducer";

const store = createStore(reducer);

export default class App extends Component {

  componentWillMount(){
    try {
      AsyncStorage.getItem('isLogin').done((isLogin) => {
        if(isLogin == 'true' || isLogin == 1){
          AsyncStorage.getItem('user').done((user) => {
            let data = JSON.parse(user);
            store.dispatch({type : 'login',data : data});
          })
        }
      })
    } catch (error) {
      
    }
  }

  render() {
    return (
      <Provider store={store} >
        <HomeStack />
      </Provider>
    );
  }
}
