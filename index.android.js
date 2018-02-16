import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native';

const Styles = {
  mainView: {
    flex: 1
  },
  headerView: {
    flex: 2
  },
  actionsView: {
    flex: 2,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
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
  },
  resultView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b9e3eb'
  },
  resultViewText: {
    fontSize: 30,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#000'
  }
}

class Header extends Component {
  render() {
    return(
      <View>
        <Image source={ require('./imgs/jokenpo.png') } >
        </Image>
      </View>
    )
  }
}

class Result extends Component {
  render() {
    const { resultViewText } = Styles;

    if(this.props.result == 'win') {
      return(
        <Text style={ resultViewText }>Você GANHOU !</Text>
      )
    } else if(this.props.result == 'lost') {
      return(
        <Text style={ resultViewText }>Você PERDEU !</Text>
      )
    } else if(this.props.result == 'draw') {
      return(
        <Text style={ resultViewText }>EMPATOU !</Text>
      )
    } else {
      return(
        <Text></Text>
      )
    }
  }
}

class LiveSelect extends Component {
  render() {
    const { selectedText } = Styles;

    if(this.props.selected == 'Pedra') {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ require('./imgs/pedra.png') }></Image>
        </View>
      );
    }else if(this.props.selected == 'Papel') {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ require('./imgs/papel.png') }></Image>
        </View>
      );
    }else if(this.props.selected == 'Tesoura') {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ require('./imgs/tesoura.png') }></Image>
        </View>
      );
    } else {
      return(
        <View>
          <Text style={ selectedText }>{ this.props.player }</Text>
          <Image source={ require('./imgs/empty.png') }></Image>
        </View>
      );
    }
  }
}

class App extends Component {

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
    const { mainView,
      actionsView,
      headerView,
      selectedView,
      buttonStyle,
      buttonText,
      selected,
      selectedTextEspecial,
      resultView
    } = Styles;

    return(
      <View style={ mainView }>

        <Header style={ headerView }></Header>

        <View style={ actionsView }>
          <TouchableOpacity
            style={ buttonStyle }
            onPress={ () => { this.choosen('Pedra') } }
            >
            <Image source={ require('./imgs/pedra.png') }></Image>
            <Text style={ buttonText }>Pedra</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ buttonStyle }
            onPress={ () => { this.choosen('Papel') } }
            >
            <Image source={ require('./imgs/papel.png') }></Image>
            <Text style={ buttonText }>Papel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={ buttonStyle }
            onPress={ () => { this.choosen('Tesoura') } }
            >
            <Image source={ require('./imgs/tesoura.png') }></Image>
            <Text style={ buttonText }>Tesoura</Text>
          </TouchableOpacity>
        </View>

        <View style={ selectedView }>
          <LiveSelect style={ selected } selected={ this.state.userChoice } player='Voce'>
          </LiveSelect>
          <View style={ selectedTextEspecial }>
            <Text>VS</Text>
          </View>
          <LiveSelect style={ selected } selected={ this.state.computerChoice } player='Computador'>
          </LiveSelect>
        </View>

        <View style={ resultView }>
          <Result result={ this.state.result }></Result>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('app3', () => App);
