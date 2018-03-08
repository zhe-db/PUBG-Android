import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class NewsItem extends React.PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
  
    render() {
      const textColor = this.props.selected ? "red" : "black";
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View>
            <Text style={{ color: textColor }}>
              {this.props.title}
            </Text>
          </View>
        </TouchableOpacity>
      );
    }
}

const styles = StyleSheet.create({
    newsItem: {
        width: '100%',
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eee"
    }
})

export default NewsItem