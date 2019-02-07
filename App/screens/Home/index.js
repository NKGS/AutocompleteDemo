import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, requireNativeComponent } from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// var iface = {
//   propTypes: {
//     streamUrl: PropTypes.string
//   }
// };


class Home extends Component {
    logout = () => {
        //this.props.dispatch(loginAction.changeState(false));
    }
    render(){
        return (
            <View>
            <RCTNativeView />
             </View>
            );
    }
}

const styles = StyleSheet.create({
    body:{
      flex: 1,
      marginTop: 20, 
    },
    txtColor:{
        color:'black',
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

var RCTNativeView = requireNativeComponent('RCTNativeView');
export default Home;