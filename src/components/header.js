import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

const headerImage = require('../../imgs/jokenpo.png');

const Styles = {
  headerView: {
    flex: 3
  }
}

class Header extends Component {

  render() {
    const { headerView } = Styles;

    return(
      <View style={ headerView }>
        <Image source={ headerImage } >
        </Image>
      </View>
    )
  }
}

export default Header;
