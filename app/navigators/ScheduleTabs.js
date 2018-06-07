//import React from 'react';
import Schedule from '../screens/Schedule';
import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator({
  Main: Schedule,
  Amphitheatre: Schedule,
  Barn: Schedule,
  Firefly: Schedule,
});
