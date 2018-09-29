import React from 'react';
import { ScrollView } from 'react-native';
import Header from '../components/Header';

const Details = ({ navigation }) => {
  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <Header title={'Exames Recomendados'} />
    </ScrollView>
  );
}

export default Details;
