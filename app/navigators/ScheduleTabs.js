import React from 'react';
import Schedule from '../screens/Schedule';
import Lineup from '../data/lineup';
import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator({
  Main: {
    screen: props => <Schedule {...props} lineup={Lineup.main} />,
  },
  Amphitheatre: {
    screen: props => <Schedule {...props} lineup={Lineup.amphitheatre} />,
  },
  Barn: {
    screen: props => <Schedule {...props} lineup={Lineup.barn} />,
  },
  Firefly: {
    screen: props => <Schedule {...props} lineup={Lineup.firefly} />,
  }
});
