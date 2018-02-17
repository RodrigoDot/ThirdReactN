import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';

import LiveSelect from './live-select';

const Styles = {
  selectedView: {
    flex: 2,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  selectedText: {
    color: '#000',
    textAlign: 'center'
  },
  selectedTextEspecial: {
    justifyContent: 'center'
  }
}

class Selecteds extends Component {
  render() {

    const {
      selectedView,
      selected,
      selectedTextEspecial,
    } = Styles;

    return(
      <View style={ selectedView }>
        <LiveSelect style={ selected } selected={ this.props.userSelected } player='Voce'>
        </LiveSelect>
        <View style={ selectedTextEspecial }>
          <Text>VS</Text>
        </View>
        <LiveSelect style={ selected } selected={ this.props.computerSelected } player='Computador'>
        </LiveSelect>
      </View>
    )
  }
}

export default Selecteds;
