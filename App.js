/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
} from 'react-native';
import Router from './src/modules/Router';

export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Router />
      </SafeAreaView>
    );
  }
}
