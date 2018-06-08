import React from 'react';
//import ImageBackground from '../components/SafeImageBackground';
import { Platform, StatusBar, StyleSheet } from 'react-native';
import { Button, Body, Container as NbContainer, Header as Header, Icon, Left, Right, Title } from "native-base";

export default class Container extends React.Component {
  constructor(props){
    super(props);
  }

  render = () => <NbContainer style={StyleSheet.flatten(styles.body, this.props.style)} children={this.props.children} />
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#f2f3f5',
    flex: 1,
    ...Platform.select({
      android: {
          marginTop: StatusBar.currentHeight
      }
    })
  },
});
