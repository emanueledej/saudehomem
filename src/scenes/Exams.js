import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import Header from '../components/Header';

const Details = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title={'Exames Recomendados'} />
      <View
        style={{
          alignItems: 'center',
          padding: 10,
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
          }}
        >
          A consulta de exames recomendados estará disponível em breve!{'\n\n'}
        </Text>
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 80, textAlign: 'center' }}>😄</Text>
      </View>
    </ScrollView>
  );
}

export default Details;
