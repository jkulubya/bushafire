import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { ListItem } from 'react-native-elements';
export default class ScheduleArtiste extends React.Component {
  render() {
    return (
      <TouchableHighlight style={styles.container} underlayColor="#ffbe0f" onPress={() => console.log('PRESSED')}>
        <ListItem
          chevron={true}
          chevronColor="#013146"
          containerStyle={styles.listItemContainer}
          leftElement={<Text style={styles.actTime}>1400</Text>}
          title={<Text style={styles.actName}>Alice Phoebe Lou</Text>}
        />
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImageWrapper: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
  },
  backgroundImage: {
    flex: 1,
  },
  viewTest: {
    height: 20,
    width: 20,
    backgroundColor: 'red',
  },
  // container: {
  //   flex: 1,
  // },
  listItemContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0)'
  },
  actName: {
    color: '#013146',
    fontFamily: 'bowie-black',
    textAlign: 'center',
    fontSize: 22,
    //paddingTop: 35,
  },
  actTime: {
    color: '#013146',
    fontFamily: 'bowie-black',
    fontSize: 14,
    textAlign: 'center',
    //paddingBottom: 35
  }
});
