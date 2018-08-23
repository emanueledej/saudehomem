import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const dataFromServer = [
  {key: 1},
  {key: 2},
  {key: 3}, {key: 4},
  {key: 5}, {key: 6},
  {key: 7}, {key: 8},
  {key: 9}, {key: 10},
];

const Home = () => (
  <FlatList
    style={{ flex: 1 }}
    data={dataFromServer}
    renderItem={({ item }) => (
      <TouchableOpacity
        key={`item-${item.key}`}
        onPress={()=>{}}
      >
        <View>
          <Text style={{ fontSize: 60 }}>
            {`Item da lista - ${item.key}`}
          </Text>
        </View>
      </TouchableOpacity>
    )}
  />
);

export default Home;
