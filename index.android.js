import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';

import Header from './src/components/header';
import Actions from './src/components/actions';

const Styles = StyleSheet.create({
  mainView: {
    flex: 1
  }
});

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
