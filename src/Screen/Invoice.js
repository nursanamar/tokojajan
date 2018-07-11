import React, { Component } from 'react';
import { WebView } from 'react-native';
import { Spinner,Container, Header, Card, Left, Right, Body, Title, Content, Text } from "native-base";


// class Invoice extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             isLoading : true
//         }
//     }

//     render(){
//         console.log(this.props.navigation.state.params)
        
//     }
// }

const Invoice = (props) => {
    return (
        
            <WebView renderLoading={() => (<Spinner />)} startInLoadingState source={{ uri: 'http://tokojajan.com/pesanan/' + props.navigation.state.params.no }} />
        
    )
}

export default Invoice;