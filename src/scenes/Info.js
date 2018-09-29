import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';

const Info = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <Header title={'Sobre'} />
      <View style={{ flex: 5, padding: 20 }}>
        <Text style={{ fontSize: 20 }}>
          <Text style={{ fontWeight: 'bold' }}>A Rede Nacional Saúde do Homem </Text>
          é uma organização não governamental e sem fins lucrativos.
          {'\n\n'}
          O objetivo da mesma é atuar na conscientização da prevenção do câncer e outras doenças relacionadas ao público masculino.
          {'\n\n'}
          Este software foi desenvolvido em parceria com a iniciativa de projetos comunitários do
          <Text style={{ fontWeight: 'bold' }}> Centro Universitário Católica de Santa Catarina.</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

export default Info;
