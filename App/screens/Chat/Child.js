import React, { Component } from 'react';
import {View , Text} from 'react-native';

export default class Child extends Component{
    constructor(props){
        super(props);
        console.log("Well done child constructor");
    }

    componentWillMount(){
        console.log("Child component will mount");
    }

    componentDidMount(){
        console.log("Child component did mount");
    }

    render(){
        return (
            <View>
                <Text>Welcome</Text>
                </View>
        );
    }
}