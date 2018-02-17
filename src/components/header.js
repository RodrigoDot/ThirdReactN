import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

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
        <Image source={ require('../../imgs/jokenpo.png') } >
        </Image>
      </View>
    )
  }
}

export default Header;
