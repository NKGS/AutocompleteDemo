/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from "./navigation/index.js";
//import configureStore from './store/appstore';
//This function intializes our store
//const store = configureStore();

export default class App extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        //This line is used to comment Warnings
        console.disableYellowBox = true;
    }

    render() {
        return (
            <Routes />
            // <Provider store={store}>
                
            // </Provider>
        );
    }
}