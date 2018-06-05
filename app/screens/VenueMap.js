import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MapView } from 'expo';
import { Header } from 'react-native-elements';

const places = [
  {
    name: "The Barn",
    coordinates: {
      latitude: -26.496541,
      longitude: 31.217661,
    },    
  }
]
export default class VenueMap extends React.Component {
  constructor(props){
    super(props);
    this.map = React.createRef();
  }
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
          centerComponent={{ text: 'Venue Map', style: { color: '#fff', fontWeight: 'bold' } }}
          backgroundColor="#013146"
          outerContainerStyles={styles.headerOuterContainer}
        />
        <MapView 
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -26.497483131698242,
            longitude: 31.218378916382793,
            latitudeDelta: 0.0046844851643399466,
            longitudeDelta: 0.003363490104675293,
          }}
          provider="google"
          mapType="satellite"
          ref={this.map}
          minZoomLevel={17}
          rotateEnabled={false}
          pitchEnabled={false}
        >
        {places.map(place => (
          <MapView.Marker coordinate={place.coordinates} title={place.name}/>
        ))}
        </MapView>
      </View>
    );
  }

  componentDidMount(){
    this.map.current.setMapBoundaries(
      {
        latitude: -26.495054,
        longitude: 31.216133
      },
      {
        latitude: -26.499753,
        longitude: 31.220829
      }
    )
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
