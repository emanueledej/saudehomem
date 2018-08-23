import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../scenes/Login';
import Home from '../scenes/Home';

const Router = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Página inicial',
    }
  },
});

export default Router;
