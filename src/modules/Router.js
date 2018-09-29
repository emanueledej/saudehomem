import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Login from '../scenes/Login';
import Home from '../scenes/Home';
import Details from '../scenes/Details';
import Exams from '../scenes/Exams';
import Info from '../scenes/Info';

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Notícias',
      tabBarIcon: ({ _, tintColor }) => (
        <Icon
          name="newspaper"
          color={tintColor}
          size={26}
        />
      ),
    }
  },
  Exams: {
    screen: Exams,
    navigationOptions: {
      title: 'Exames',
      tabBarIcon: ({ _, tintColor }) => (
        <Icon
          name="user-md"
          color={tintColor}
          size={26}
        />
      ),
    }
  },
  Info: {
    screen: Info,
    navigationOptions: {
      title: 'Sobre',
      tabBarIcon: ({ _, tintColor }) => (
        <Icon
          name="info-circle"
          color={tintColor}
          size={26}
        />
      ),
    }
  }
},
{ tabBarOptions: {
  showLabel: true, // hide labels
  activeTintColor: '#459CD1',
  inactiveTintColor: '#000',
}})

const Router = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    }
  },
  Home: {
    screen: TabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      title: 'Detalhes',
      headerStyle: {
        backgroundColor: '#459CD1',
      },
      headerTintColor: '#fff',
    }
  },
});

export default Router;
