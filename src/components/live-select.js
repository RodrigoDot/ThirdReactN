import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

const stoneImage = require('../../imgs/pedra.png');
const paperImage = require('../../imgs/papel.png');
const scissorsImage = require('../../imgs/tesoura.png');
const emptyImage = require('../../imgs/empty.png');

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
          <Image source={ stoneImage }></Image>
        </View>
      );
    }else if(this.props.selected == 'Papel') {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ paperImage }></Image>
        </View>
      );
    }else if(this.props.selected == 'Tesoura') {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ scissorsImage }></Image>
        </View>
      );
    } else {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ emptyImage }></Image>
        </View>
      );
    }
  }
}

export default LiveSelect;
