import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ScheduleArtiste extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableHighlight style={styles.container} underlayColor="#ffbe0f" onPress={() => console.log('PRESSED')}>
        <Grid>
            <Col style={{alignSelf: 'center', width: 60 }}>
              <Text style={styles.actTime}>1400</Text>
            </Col>
            <Col style={{alignSelf: 'center'}}>
              <Text style={styles.actName}>{this.props.name}</Text>
            </Col>
            <Col style={{alignSelf: 'center', width: 40 }}>
              <Icon name='arrow-forward' style={{ alignSelf:'center', color: '#013146', fontSize: 15 }}/>
            </Col>
        </Grid>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    paddingBottom: 15,
  },
  actName: {
    alignSelf: 'center',
    color: '#013146',
    fontFamily: 'bowie-black',
    textAlign: 'center',
    fontSize: 22,
  },
  actTime: {
    alignSelf: 'center',
    color: '#013146',
    fontFamily: 'bowie-black',
    fontSize: 14,
  },
});
