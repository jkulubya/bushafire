import React from 'react';
import Container from '../components/Container';
import Header from '../components/Header';
import { Platform, StatusBar, StyleSheet, Text } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <Container>
        <Header
          headerTitleText="BUSHAFIRE"
          onLeftPress={this.props.navigation.openDrawer}
         />
        <Text style={{ fontSize: 25, marginTop: 30 }}>Home page. Cool stuff will go here.</Text>
      </Container>
    );
  }

}
