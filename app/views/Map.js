import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MAPBOX_API_KEY } from 'react-native-dotenv';
//import { MapView } from 'react-native-maps';

export default class Map extends React.Component {
  render() {
    return (
      <Text>Map View</Text>
      /*
      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
      */
    );
  }
}
