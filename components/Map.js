import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';

export default class Map extends React.Component {
  render() {
    return (
      <Text>map goes here</Text>
      /*<MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />*/
    );
  }
}
