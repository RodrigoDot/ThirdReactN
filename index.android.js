import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';

const Styles = {

}

class MainComponent extends Component {
  render() {
    return (
      <View>
        <Text>Ola</Text>
        <Text>Eu sou Rodrigo</Text>
      </View>
    );
  }
}

class App extends Component {
  render() {
    return(
      <MainComponent>
      </MainComponent>
    );
  }
}

AppRegistry.registerComponent('app3', () => App);
