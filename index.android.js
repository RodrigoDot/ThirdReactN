import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

import Header from './src/components/header';
import Actions from './src/components/actions';

const Styles = {
  mainView: {
    flex: 1
  }
}

class App extends Component {

  render() {
    const { mainView } = Styles;

    return(
      <View style={ mainView }>

        <Header></Header>

        <Actions></Actions>

      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => App);
