import React from 'react';
import WebView from 'react-native-webview';


export default function Product({ navigation }) {



    return (
        <WebView source={
            { uri: navigation.state.params.product.url }
        }>

        </WebView>
    );
}

//Product.navigationOptions = ({ navigation }) => ({
//    title: navigation.state.params.product.title
//})