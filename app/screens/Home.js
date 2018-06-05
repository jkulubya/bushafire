import React from 'react';
import ScheduleArtist from '../components/ScheduleArtist';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';

var scheduledArtistes = [
  { key: '1', name: 'Alice Phoebe Lou'},
  { key: '2', name: '5K-HD'},
  { key: '3', name: 'Azah'},
  { key: '4', name: 'Bam Bam Brown'},
  { key: '5', name: 'Bholoja'},
  { key: '6', name: 'Davina Satori'},
  { key: '7', name: 'DJ Bob'},
]
export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: 'BUSHAFIRE', style: { color: '#fff', fontWeight: 'bold' } }}
          backgroundColor="#013146"
          outerContainerStyles={styles.headerOuterContainer}
        />
        <ImageBackground
          style={{ flex : 1}}
          imageStyle={{ resizeMode: 'repeat' }}
          source={require('../assets/img/bushfire-background.png')}>
          <FlatList 
            data = {scheduledArtistes}
            renderItem={({item}) => <ScheduleArtist />}
          />
        </ ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#293481',
    flex: 1,
  },
  // pageBackground: {
  //   width: null,
  //   height: null,
  // },
  headerOuterContainer: {
    borderBottomWidth: 0,
  },
  item: {
    //height: 30,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
  },
  itemText:{
    color: '#013146',
    fontSize: 22,
    fontWeight: 'bold'
  },
  separator: {
    height: 1,
    backgroundColor: '#ffbe0f',
  },
});
