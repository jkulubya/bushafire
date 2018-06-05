import React from 'react';
import { Button, Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class ScheduleArtiste extends React.Component {
  render() {
    return (
      <TouchableOpacity activeOpacity={0.65} style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={require('../assets/img/acts/alice-phoebe-lou.jpg')}>
          <View>
            <Text style={styles.actName}>Alice Phoebe Lou</Text>
            <Text style={styles.actTime}>1400</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
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
  container: {
    margin: 8,
    marginTop: 6,
    marginBottom: 6,
    flex: 1,
  },
  actName: {
    color: '#f6e1c2',
    fontFamily: 'bowie-black',
    textAlign: 'center',
    fontSize: 35,
    paddingTop: 35,
  },
  actTime: {
    color: '#f6e1c2',
    fontFamily: 'bowie-black',
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 35
  }
});
