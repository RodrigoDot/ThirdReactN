import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const Styles = {
  resultViewText: {
    fontSize: 30,
  },
  resultView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b9e3eb'
  }
}

class Result extends Component {
  render() {

    const { resultView, resultViewText } = Styles;

    if(this.props.result == 'win') {
      return(
        <View style={ resultView }>
          <Text style={ resultViewText }>Você GANHOU !</Text>
        </View>
      )
    } else if(this.props.result == 'lost') {
      return(
        <View style={ resultView }>
          <Text style={ resultViewText }>Você PERDEU !</Text>
        </View>
      )
    } else if(this.props.result == 'draw') {
      return(
        <View style={ resultView }>
          <Text style={ resultViewText }>EMPATOU !</Text>
        </View>
      )
    } else {
      return(
        <View style={ resultView }>
          <Text></Text>
        </View>
      )
    }
  }
}

export default Result;
