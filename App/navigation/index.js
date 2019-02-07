import React, { Component } from 'react';
import {createMaterialTopTabNavigator,createAppContainer,createStackNavigator, createDrawerNavigator, createBottomTabNavigator} from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import {View,Text,StyleSheet,Platform,TouchableOpacity,Image,StatusBar} from 'react-native';

import Home from '../screens/Home/index';
import About from '../screens/About/index';
import Chat from '../screens/Chat/index';
import LoginScreen from '../screens/Login/index';
import DrawerScreen from '../screens/Common/DrawerScreen';

const Tabs = createBottomTabNavigator({
    Home: Home,
    About: About,
    Chat: Chat
},{
    tabBarOptions: {
        activeTintColor: '#000',
        inactiveTintColor: 'gray',
        style: {
            backgroundColor: '#fff',
        },
        indicatorStyle: {
            backgroundColor: '#000',
        },
    }
});

const DrawerNavigator = createDrawerNavigator({
    Home:{
        screen: Tabs
    }
},{
    initialRouteName: 'Home',
    contentComponent: DrawerScreen,
    drawerWidth: 300
});

const MenuImage = ({navigation}) => {
    if(!navigation.state.isDrawerOpen){
        return <Image source={require('../images/menu-button.png')}/>
    }else{
        return <Image source={require('../images/left-arrow.png')}/>
    }
}

const StackNavigator = createStackNavigator({
    
    //important: key and screen name (i.e. DrawerNavigator) should be same while using the drawer navigator inside stack navigator.
    
    DrawerNavigator:{
        screen: DrawerNavigator,
    },
    Login: LoginScreen,

},{
    initialRouteName: 'DrawerNavigator',
},{
    navigationOptions: ({ navigation }) => ({
        title: 'ReactNavigation',  // Title to appear in status bar
        headerLeft: 
        <TouchableOpacity  onPress={() => {navigation.dispatch(DrawerActions.toggleDrawer())} }>
            <MenuImage style="styles.bar" navigation={navigation}/>
        </TouchableOpacity>,
        headerStyle: {
            backgroundColor: '#333',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

    })
});

export default createAppContainer(StackNavigator);
