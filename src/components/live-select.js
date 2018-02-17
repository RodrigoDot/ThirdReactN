import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

const Styles = {
  selectedText: {
    color: '#000',
    textAlign: 'center'
  }
}

class LiveSelect extends Component {
  render() {
    const { selectedText } = Styles;

    if(this.props.selected == 'Pedra') {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ require('../../imgs/pedra.png') }></Image>
        </View>
      );
    }else if(this.props.selected == 'Papel') {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ require('../../imgs/papel.png') }></Image>
        </View>
      );
    }else if(this.props.selected == 'Tesoura') {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ require('../../imgs/tesoura.png') }></Image>
        </View>
      );
    } else {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ require('../../imgs/empty.png') }></Image>
        </View>
      );
    }
  }
}

export default LiveSelect;
