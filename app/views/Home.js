import React, { Component } from 'react'
import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native'

export default class Home extends Component {
  _startApp() {
    this.props.navigation.navigate('Map')
  }

  render() {
    let pic = require('../assets/img/bb-home.jpg')

    return (
      <View style={styles.home}>
        <Image source={pic} style={styles.bg} />
        <TouchableOpacity onPress={(e)=>this._startApp(e)} style={styles.button}>
          <Text style={styles.buttonEnter}>Enter</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  bg: {
    height: '100%',
    position: 'absolute',
    width: '100%'
  },
  buttonEnter: {
    backgroundColor: 'white',
    color: 'blue',
    fontSize: 30,
    marginBottom: 90,
    paddingBottom: 6,
    paddingTop: 6,
    textAlign: 'center',
    width: 200
  }
});
