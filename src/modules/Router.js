import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../scenes/Login';
import Home from '../scenes/Home';
import Details from '../scenes/Details';

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
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Detalhes',
    }
  },
});

export default Router;
