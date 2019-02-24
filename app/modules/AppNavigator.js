import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../views/Home';
import Map from '../views/Map';

const RootStack = createStackNavigator({
  Home: { screen: Home },
  Map: { screen: Map }
});

const AppNavigator = createAppContainer(RootStack);

export default AppNavigator;
