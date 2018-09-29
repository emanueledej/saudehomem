import React from 'react';
import { PixelRatio, View, Text, ScrollView, Dimensions } from 'react-native';
import HTML from 'react-native-render-html';

const Details = ({ navigation }) => {
  const { title, content } = navigation.state.params;
  return (
    <ScrollView contentContainerStyle={{ backgroundColor: 'white' }} style={{ flex: 1}}>
      <View style={{ flex: 1, padding: 10, backgroundColor: '#AED5EC' }}>
        <Text style={{ fontSize: 30 }}>
          {title}
        </Text>
      </View>
      <View style={{ flex: 5, padding: 20 }}>
        <HTML
          style={{ flex: 1 }}
          html={content}
          baseFontStyle={{ fontSize: 20 }}
          imagesMaxWidth={Dimensions.get('window').width}
          ptSize={PixelRatio.get()}
        />
      </View>
    </ScrollView>
  );
}

export default Details;
