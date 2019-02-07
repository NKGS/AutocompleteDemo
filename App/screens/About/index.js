import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, NativeModules} from 'react-native';
//import * as loginAction from '../../actions/login.action';
import { connect } from 'react-redux';

let viewHt;
class About extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSlected:'tab1'
        };
    }
    find_dimesions(layout) {
        const { x, y, width, height } = layout;
        viewHt = height;
    }

    callNative = (val) => {
        NativeModules.AutoComplete.callNativeMethod("nikita",(resp) =>{
            alert(JSON.stringify(resp));
        }
        );

        this.setState({
            isSlected: val
        });
    }

    logout = () => {
        //this.props.dispatch(loginAction.changeState(false));
    }

    render(){
        return (<View style={styles.body}>
            <View style={styles.header}>
                <View style={styles.tabView}>
                    
                    <TouchableOpacity style={styles.tabButton} onPress={(val) => this.callNative('tab1')} onLayout={(event) => { this.find_dimesions(event.nativeEvent.layout) }}> 
                        <Text style={styles.tabBtnTxt}>Tab1</Text>
                    </TouchableOpacity>
                    
                </View>
                <View style={styles.tabView}>
                    <TouchableOpacity style={styles.tabButton} onPress={(val) => this.callNative('tab2')}> 
                        <Text style={styles.tabBtnTxt}>Tab2</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.mainView}>
                {
                    this.state.isSlected == 'tab1' 
                    ? <Text style={styles.tabBtnTxt}>Tab1</Text>
                    : <Text style={styles.tabBtnTxt}>Tab2</Text>
                }
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    body:{
      flex: 18,
      marginTop: 0, 
      borderWidth: 1,
      borderColor: 'red'
    },
    tabView:{
        flex:1,
    },
    tabButton:{
        flex:1,
        borderWidth:1,
        borderRadius:5,
        borderColor:'black',
        height:undefined,
        alignItems:'center',
        justifyContent:'center',
        //alignText:'center'
    },
    tabBtnTxt:{
        flex:1,
        color:'blue',
        borderWidth:1,
        borderColor: 'green',
        height:undefined,
        alignItems:'center',
        justifyContent:'center',
        lineHeight:44
        //alignText:'center'
    },
    mainView:{
        flex: 16
    },
    header:{
        flex:2,
        borderWidth: 1,
        borderColor: 'blue',
        flexDirection: 'row'
    },
    txtColor:{
        color:'blue',
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


export default About;