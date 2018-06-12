import React from 'react';
import moment from 'moment-timezone';
import { ImageBackground, StyleSheet, Text, TouchableHighlight } from 'react-native';
import { Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import Panel from 'react-native-panel';

export default class ScheduleArtiste extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    var header = 
      <TouchableHighlight
        style={styles.container}
        underlayColor="#ffbe0f"
        onPress={() => console.log('PRESSED')}>
        <Grid>
          <Col style={{alignSelf: 'center', width: 60 }}>
            <Text style={styles.actTime}>{moment(this.props.start).format('HHmm')}</Text>
          </Col>
          <Col style={{alignSelf: 'center'}}>
            <Text style={styles.actName}>{this.props.name}</Text>
          </Col>
          <Col style={{alignSelf: 'center', width: 40 }}>
            <Icon name='arrow-forward' style={{ alignSelf:'center', color: '#013146', fontSize: 15 }}/>
          </Col>
        </Grid>
      </TouchableHighlight>;

    return (
        <Panel header={() => header}>
          {/* <TouchableHighlight
            style={styles.container}
            underlayColor="#ffbe0f"
            onPress={() => console.log('PRESSED')}> */}
            <Text>Hi</Text>
          {/* </TouchableHighlight>; */}
        </Panel>
      
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
