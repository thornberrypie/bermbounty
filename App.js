import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Map from './components/Map';
import Home from './views/Home';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Home/>
        <Map/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
