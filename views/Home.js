import React, { Component } from 'react'
import { Image, Text } from 'react-native'

export default class Home extends Component {
  render() {
    let pic = require('../assets/img/bb-home.jpg')

    return (
      <Image source={pic} style={{
        flex: 1,
        height: '100%',
        position: 'absolute',
        width: '100%'
      }} />
    );
  }
}
