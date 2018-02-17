import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import Selecteds from './selecteds';
import Result from './result';

const Styles = {
  actionsView: {
    flex: 5,
    marginTop: 8,
    flexDirection: 'column',
  },
  choicesView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#000'
  }
}

class Actions extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userChoice: '',
      computerChoice: '',
      result: '',
      userSelectedImage: './imgs/empty.png',
      computerSelectedImage: './imgs/empty.png'
    }
  }

  choosen(choice) {
    this.setState({
      userChoice: choice
    })

    //here we could create a loading result function

    //call to get the computer choice (function)
    this.getComputerChoice(choice);
  }

  getComputerChoice(userSelected) {
    computerSelected = '';

    //Getting some aleatory choice
    var computerChoiceNumber = Math.floor(Math.random() * 3);

    if(computerChoiceNumber == 0) {
      computerSelected = 'Pedra';
    }
    if(computerChoiceNumber == 1) {
      computerSelected = 'Papel';
    }
    if(computerChoiceNumber == 2) {
      computerSelected = 'Tesoura';
    }

    //call to set the result (function)
    this.setResult(userSelected, computerSelected);
  }

  setResult(userSelected, computerSelected) {

    //Calculating the result
    if(userSelected == computerSelected) {
        result = 'draw';
    }
    if(userSelected == 'Pedra' && computerSelected == 'Tesoura') {
        result = 'win';
    }
    if(userSelected == 'Pedra' && computerSelected == 'Papel') {
        result = 'lost';
    }
    if(userSelected == 'Papel' && computerSelected == 'Pedra') {
        result = 'win';
    }
    if(userSelected == 'Papel' && computerSelected == 'Tesoura') {
        result = 'lost';
    }
    if(userSelected == 'Tesoura' && computerSelected == 'Papel') {
        result = 'win';
    }
    if(userSelected == 'Tesoura' && computerSelected == 'Pedra') {
        result = 'lost';
    }

    //updating the state
    this.setState({
      computerChoice: computerSelected,
      result: result,
    });
  }

  render() {

    const {
      actionsView,
      choicesView,
      buttonStyle,
      buttonText,
    } = Styles;

    return(
      <View style={ actionsView }>
        <View style={ choicesView }>
          <TouchableOpacity
            style={ buttonStyle }
            onPress={ () => { this.choosen('Pedra') } }
            >
            <Image source={ require('../../imgs/pedra.png') }></Image>
            <Text style={ buttonText }>Pedra</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ buttonStyle }
            onPress={ () => { this.choosen('Papel') } }
            >
            <Image source={ require('../../imgs/papel.png') }></Image>
            <Text style={ buttonText }>Papel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ buttonStyle }
            onPress={ () => { this.choosen('Tesoura') } }
            >
            <Image source={ require('../../imgs/tesoura.png') }></Image>
            <Text style={ buttonText }>Tesoura</Text>
          </TouchableOpacity>
        </View>
        <Selecteds
          userSelected={ this.state.userChoice }
          computerSelected={ this.state.computerChoice }
          >
        </Selecteds>
        <Result result={ this.state.result }></Result>
      </View>

    )
  }
}

export default Actions;
