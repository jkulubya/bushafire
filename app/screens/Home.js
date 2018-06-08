import React from 'react';
import Header from '../components/Header';
import { Platform, StatusBar, StyleSheet, Text } from 'react-native';
import { Container } from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <Container style={styles.body}>
        <Header
          headerTitleText="BUSHAFIRE"
          onLeftPress={this.props.navigation.openDrawer}
         />
        <Text style={{ fontSize: 25, marginTop: 30 }}>Home page. Cool stuff will go here.</Text>
      </Container>
    );
  }

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
