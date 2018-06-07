import React from 'react';
import ScheduleArtist from '../components/ScheduleArtist';
import ImageBackground from '../components/SafeImageBackground';
import { FlatList, Platform, StatusBar, StyleSheet, Text, View } from 'react-native';
import { Button, Body, Container, Header, Icon, Left, Right, ScrollableTab, Tab, Tabs, Title } from "native-base";

var scheduledArtistes = [
  { key: '1', name: 'Alice Phoebe Lou'},
  { key: '2', name: '5K-HD'},
  { key: '3', name: 'Azah'},
  { key: '4', name: 'Bam Bam Brown'},
  { key: '5', name: 'Bholoja'},
  { key: '6', name: 'Davina Satori'},
  { key: '7', name: 'DJ Bob'},
  { key: '8', name: 'Alice Phoebe Lou'},
  { key: '9', name: '5K-HD'},
  { key: '10', name: 'Azah'},
  { key: '11', name: 'Bam Bam Brown'},
  { key: '12', name: 'Bholoja'},
  { key: '13', name: 'Davina Satori'},
  { key: '14', name: 'DJ Bob'},
  { key: '15', name: 'Alice Phoebe Lou'},
  { key: '16', name: '5K-HD'},
  { key: '17', name: 'Azah'},
  { key: '18', name: 'Bam Bam Brown'},
  { key: '19', name: 'Bholoja'},
  { key: '20', name: 'Davina Satori'},
  { key: '21', name: 'DJ Bob'},
]
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
        <Tabs
          renderTabBar={()=> <ScrollableTab />}
          >
          <Tab heading="Friday 26 May">
            <ImageBackground
              style={{ flex : 1}}
              imageStyle={{ resizeMode: 'repeat' }}
              source={require('../assets/img/bushfire-background.png')}>
              <FlatList
                data = {scheduledArtistes}
                renderItem={({item}) => <ScheduleArtist />}
                ItemSeparatorComponent={this.renderSeparator} />
            </ImageBackground>
          </Tab>
          <Tab heading="Saturday 27 May">
            <ImageBackground
              style={{ flex : 1}}
              imageStyle={{ resizeMode: 'repeat' }}
              source={require('../assets/img/bushfire-background.png')}>
              <FlatList
                data = {scheduledArtistes}
                renderItem={({item}) => <ScheduleArtist />}
                ItemSeparatorComponent={this.renderSeparator} />
            </ImageBackground>
          </Tab>
          <Tab heading="Sunday 28 May">
            <ImageBackground
              style={{ flex : 1}}
              imageStyle={{ resizeMode: 'repeat' }}
              source={require('../assets/img/bushfire-background.png')}>
              <FlatList
                data = {scheduledArtistes}
                renderItem={({item}) => <ScheduleArtist />}
                ItemSeparatorComponent={this.renderSeparator} />
            </ImageBackground>
          </Tab>
        </Tabs>
      </Container>
    );
  }

  renderSeparator = () =>  <View style={styles.listSeparator} />
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
  },
  listSeparator: {
    height: 1,
    backgroundColor: '#ffbe0f',
  },
  item: {
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
  },
  itemText:{
    color: '#013146',
    fontSize: 22,
    fontWeight: 'bold'
  },
});
