/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
} from 'react-native';
import logo from '../../saudedohomem.png';

class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={logo}
        />
        <Text style={styles.welcome}>Saúde do Homem</Text>
        <Button
          onPress={() => this.props.navigation.navigate('Home')}
          title="Botão do facebook - Conectar"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  logo: {
    height: 200,
    width: 200,
    resizeMode: 'contain',
    marginTop: 40,
  }
});

export default Login;
