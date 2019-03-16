import React, {Component} from 'react';
import { Text, View } from 'react-native';
import { MAPBOX_ACCESS_TOKEN } from 'react-native-dotenv';
import MapboxGL from '@mapbox/react-native-mapbox-gl';

MapboxGL.setAccessToken(MAPBOX_ACCESS_TOKEN);

const columbusCircleCoordinates = [
  -73.98197650909422, 40.768793007758816
];

export default class Map extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <MapboxGL.MapView
          ref={(c) => this._map = c}
          style={{flex: 1}}
          zoomLevel={1}>
        </MapboxGL.MapView>
      </View>
    );
  }
}
