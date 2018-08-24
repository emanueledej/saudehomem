import React from 'react';
import {
  Platform,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image
} from 'react-native';

// TODO - Get data from RSS
const dataFromServer = [
  {
    id: '1',
    title: 'Algum titulo 1',
    content: 'Algum conteúdo aleatório aqui, que não me diz nada',
    date: Date.now(),
    minAge: 12,
    maxAge: 23,
  },
  {
    id: '2',
    title: 'Algum titulo 2',
    content: 'Algum conteúdo aleatório aqui, que não me diz nada',
    date: Date.now(),
    minAge: 25,
    maxAge: 40,
    image: 'https://www.valordoconhecimento.com.br/blog/wp-content/uploads/2016/04/diamundialdasa%C3%BAde.png',
  },
  {
    id: '3',
    title: 'Algum titulo 3',
    content: 'Algum conteúdo aleatório aqui, que não me diz nada',
    date: Date.now(),
    minAge: 1,
    maxAge: 64,
  }
];

class Home extends React.PureComponent {
  renderItem = ({ item }) => (
    <TouchableOpacity
      key={`i-${item.id}`}
      onPress={() => this.props.navigation.navigate('Details')}
    >
      <View
        key={`item_${item.id}`}
        style={{
          backgroundColor: 'white',
          borderColor: '#ccc',
          borderWidth: 1,
          ...Platform.select({
            ios: {
              shadowColor: 'rgba(0,0,0, .2)',
              shadowOffset: { height: 0, width: 0 },
              shadowOpacity: 1,
              shadowRadius: 1,
            },
            android: {
              elevation: 1,
            },
          }),
          padding: 15,
          margin: 15,
          marginBottom: 0,
        }}
      >
        { item.image && (
          <Image
            source={{ uri: item.image }}
            style={{
              alignSelf: 'center',
              width: 340,
              height: 100,
              margin: 5,
              resizeMode: 'stretch',
            }}
          />
        )}
        <Text style={{ fontSize: 23 }}>
          {item.title}
        </Text>
        <Text style={{ fontSize: 18 }}>
          {item.content}
        </Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <FlatList
        style={{ flex: 1 }}
        data={dataFromServer}
        renderItem={this.renderItem}
        keyExtractor={(item, _) => `${item.id}`}
      />
    );
  }
}

export default Home;
