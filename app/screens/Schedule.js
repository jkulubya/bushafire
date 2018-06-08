import React from 'react';
import moment from 'moment-timezone';
import Container from '../components/Container';
import Header from '../components/Header';
import ImageBackground from '../components/SafeImageBackground';
import ScheduleArtist from '../components/ScheduleArtist';
import { FlatList, StyleSheet } from 'react-native';
import { ScrollableTab, Tab, Tabs } from "native-base";

export default class Schedule extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
        <Header
          headerTitleText="Schedule"
          onLeftPress={this.props.navigation.openDrawer}
         />
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          {this.props.lineup.days.map(day => 
            (<Tab heading={moment(day.date).format("dddd D MMM")}>
              <ImageBackground
                style={{ flex : 1}}
                imageStyle={{ resizeMode: 'repeat' }}
                source={require('../assets/img/bushfire-background.png')}>
                <FlatList
                  data = { this.filterActs(this.props.lineup.acts, day) }
                  renderItem={this.renderItem}
                  ItemSeparatorComponent={this.renderSeparator} />
              </ImageBackground>                  
            </Tab>)
          )}
        </Tabs>
      </Container>
    );
  }

  filterActs = (data, day) => {
    return data.filter(el => {
      dayStart = moment(day.start).tz('Africa/Mbabane');
      dayEnd = moment(day.end).tz('Africa/Mbabane');
      actStart = moment(el.start).tz('Africa/Mbabane');
      return (actStart >= dayStart && actStart <= dayEnd);
    })
  }

  renderItem = ({ item }) => {
   return <ScheduleArtist
            name={item.name}
            artistes={item.artistes}
            start={item.start}
            end={item.end} />
  }

  renderSeparator = () =>  <View style={styles.listSeparator} />
}

const styles = StyleSheet.create({
  listSeparator: {
    height: 1,
    backgroundColor: '#ffbe0f',
  },
});
