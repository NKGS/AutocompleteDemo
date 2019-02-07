// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, {Component} from 'react';
// import { View } from "react-native";
// import {createDrawerNavigator, createAppContainer } from "react-navigation";
// import HomeScreen from "./App/HomeScreen/HomeScreen";
// import {MainScreenNavigator} from "./App/ChatScreen/index.js";
// import ProfileScreen from "./App/ProfileScreen/index.js";
// import SideBar from "./App/SideBar/SideBar";
// import { Container, Content, Picker, Button, Text } from "native-base";
// //import Expo from "expo";

// const HomeScreenRouter = createDrawerNavigator(
//   {
//     Home: { screen: HomeScreen },
//     Chat: { screen: MainScreenNavigator },
//     ProfileScreen: { screen: ProfileScreen }
//   },
//   {
//     contentComponent: props => <SideBar {...props} />
//   }
// );

// const App2 = createAppContainer(HomeScreenRouter);

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       isReady: false
//     };
//   }
//   componentWillMount() {
//     this.setState({ isReady: true });
//   }
//   render() {
//     return (<App2 />);
//   }
// }

// export default App;