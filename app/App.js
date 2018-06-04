import Home from './screens/Home';
import Schedule from "./navigators/ScheduleTabs";
import { createDrawerNavigator } from 'react-navigation';

export default createDrawerNavigator({
  Home: Home,
  Schedule: Schedule
});
