import React from 'react';
import {
  Text,
  View,
} from 'react-native';

const Header = ({ title }) => (
  <View style={{ backgroundColor: '#459CD1', padding: 20 }}>
    <Text style={{ fontSize: 35, fontWeight: 'bold' }}>
      {title}
    </Text>
  </View>
);

export default Header;
