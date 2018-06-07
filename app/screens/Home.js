import React from 'react';
import { Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button, Body, Container, Header, Icon, Left, Right, Title } from "native-base";

export default class Home extends React.Component {
  render() {
    return (
      <Container style={styles.body}>
        <Header
          style={styles.header}
          iosBarStyle="light-content"
          androidStatusBarColor="#013146"
          hasTabs>
          <Left>
            <Button 
              onPress={() => this.props.navigation.openDrawer()}
              transparent>
              <Icon name='menu' style={{ color: '#FFF' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={styles.headerTitle}>BUSHAFIRE</Title>
          </Body>
          <Right />
        </Header>
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
  header: {
    backgroundColor: '#013146'
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  }
});
