import React from 'react';
import Home from './screens/Home';
import VenueMap from './screens/VenueMap';
import Schedule from "./navigators/ScheduleTabs";
import Drawer from './components/Drawer';
import { AppLoading, Font } from 'expo';
import { createDrawerNavigator } from 'react-navigation';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  async _cacheResourcesAsync() {
    return Font.loadAsync({
      'bowie-black': require('./assets/fonts/Bowie-Black.otf'),
      'sunflower-bold': require('./assets/fonts/Sunflower-Bold.ttf'),
      'sunflower-light': require('./assets/fonts/Sunflower-Light.ttf'),
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }
    return <AppNavigator />;
  }
}

const AppNavigator =  createDrawerNavigator({
  Home: Home,
  Schedule: Schedule,
  VenueMap: VenueMap,
},{
  contentComponent: Drawer,
});
