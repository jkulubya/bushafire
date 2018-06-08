import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import Places from '../data/places';
import { MapView } from 'expo';

export default class VenueMap extends React.Component {
  constructor(props){
    super(props);
    this.map = React.createRef();
  }

  render() {
    return (
      <Container>
        <Header
          headerTitleText="Venue map"
          onLeftPress={this.props.navigation.openDrawer}
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
        {Places.map(place => (
          <MapView.Marker key={place.id} coordinate={place.coordinates} title={place.name}/>
        ))}
        </MapView>
      </Container>
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
