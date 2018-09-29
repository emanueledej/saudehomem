import React from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';
import * as TextUtil from '../utils/text'

class Card extends React.PureComponent {
  onPress = () => {
    const { onPress, item } = this.props;
    onPress(item);
  }

  render() {
    const { item } = this.props;
    const imageList = TextUtil.getImageFromHTML(item.image, item.description)
    const image = imageList && imageList[0];
    return (
      <TouchableOpacity
        onPress={this.onPress}
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
          { image && (
            <Image
              source={{ uri: image }}
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
          <Text style={{ fontSize: 14 }}>Pressione aqui para saber mais</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Card;