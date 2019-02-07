import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity,FlatList } from 'react-native';
//import * as loginAction from '../../actions/login.action';
import { connect } from 'react-redux';
import Child from './Child';
let btnData = [{val: 'a'},{val:'b'}];
class Chat extends Component {
    
    constructor(props){
        super(props);
        console.log("Parent component constructor");
    }

    logout = () => {
        //this.props.dispatch(loginAction.changeState(false));
    }

    getFlatListView(item){
        return(
            <View>
                <Text style={{color:'red', flex:1}}>{item.val}</Text>
                </View>
        )
    }

    componentWillMount(){
        console.log("Parent component will mount");
    }

    componentDidMount(){
        console.log("Parent component did mount");
    }
    render(){
        return (<View style={styles.body}>
            <View style = {styles.txtView}>
            <FlatList
                        style={styles.flatListStyle}
                        data={btnData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            this.getFlatListView.bind(item);
                        }}
                        />
                        <Child />
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      marginTop: 20, 
    },
    txtColor:{
        color:'green',
        fontSize: 20,
        
    },
    btnView:{
        flex: 0.1,
        alignItems:'flex-end'
    },
    txtView:{
        flex: 0.9,
        alignItems:'center',
        justifyContent: 'center',
    }
});


export default Chat;