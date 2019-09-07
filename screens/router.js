import React from 'react'
import { StyleSheet, View, TouchableOpacity, Image, Text, StatusBar } from 'react-native'
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator, TabNavigator } from 'react-navigation'

import Dashboard from './dashboard'
import Login from './login'

const AppNavigator = createStackNavigator({
    Dashboard: {
      screen: Dashboard,
      navigationOptions: ({ navigation }) => ({
        header: null,
      }),
    },
    Login: {
      screen: Login
    },
},
{
  initialRouteName: 'Login'
},
{
  headerMode: 'screen',
}
)

export default AppNavigator