import React from 'react';
//import ImageBackground from '../components/SafeImageBackground';
import { StyleSheet } from 'react-native';
import { Button, Body, Container, Header as NbHeader, Icon, Left, Right, Title } from "native-base";

export default class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
        <NbHeader
          style={StyleSheet.flatten(styles.header, this.props.headerStyle)}
          iosBarStyle="light-content"
          androidStatusBarColor="#013146"
          hasTabs={true}>
          <Left>
            <Button 
              onPress={this.props.onLeftPress}
              transparent>
              <Icon name='menu' style={{ color: '#FFF' }}/>
            </Button>
          </Left>
          <Body>
            <Title style={StyleSheet.flatten(styles.headerTitle, this.props.headerTitleStyles)}>
              {this.props.headerTitleText}
            </Title>
          </Body>
          <Right />
        </NbHeader>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#013146'
  },
  headerTitle: {
    color: '#FFFFFF',
    fontFamily:'bowie-black',
    fontSize: 15,    
    fontWeight: 'bold',
  },
});
