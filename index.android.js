import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  Alert
} from 'react-native';

const Styles = {

}

class MainComponent extends Component {
  render() {
    return (
      <View>
        <Text>{ this.props.label }</Text>
      </View>
    );
  }
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: 'Original text'
    };
  }

  onButtonClick = () => {

    this.setState({
      text: 'Second text'
    });
  }

  render() {
    return(
      <View>
        <MainComponent
          label= { this.state.text }
        >
        </MainComponent>
        <Button
          title='Click'
          onPress={ () => {this.onButtonClick()} }
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => App);
