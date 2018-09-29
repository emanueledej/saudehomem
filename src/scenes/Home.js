import React from 'react';
import {
  Text,
  FlatList,
  View,
} from 'react-native';
import * as rssParser from 'react-native-rss-parser';
import Card from '../components/Card';
import Header from '../components/Header';

class Home extends React.PureComponent {
  state = {
    posts: [],
    loading: false,
  }

  componentDidMount() {
    this.setState({ loading: true })
    fetch('https://saudedohomemteste.wordpress.com/feed/')
      .then(response => response.text())
      .then(data => rssParser.parse(data))
      .then((rss) => {
        this.setState({ posts: rss.items, loading: false });
      }).finally(() => this.setState({ loading: false }));
  }

  goToDetails = (item) => this.props.navigation.navigate('Details', item)

  renderItem = ({ item }) => {
    return (
      <Card
        key={`i-${item.title}`}
        onPress={this.goToDetails}
        item={item}
      />
    );
  }

  render() {
    const { posts, loading } = this.state;
    if (loading) return (
      <View>
        <Header title={'Ultimas Notícias'} />
        <View
          style={{
            alignItems: 'center',
            padding: 10,
          }}
        >
          <Text
            style={{
              fontSize: 20,
            }}
          >
            Buscando informações..
          </Text>
        </View>
      </View>
    );
    return (
      <FlatList
        style={{ flex: 1 }}
        data={posts}
        ListHeaderComponent={<Header title={'Ultimas Notícias'} />}
        ListEmptyComponent={
          <View
            style={{
              alignItems: 'center',
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Não encontramos nenhuma notícia. 😢
            </Text>
          </View>
        }
        renderItem={this.renderItem}
        keyExtractor={(item) => `${item.id}`}
      />
    );
  }
}

export default Home;
