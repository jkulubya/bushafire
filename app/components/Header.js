import React from 'react';
//import ImageBackground from '../components/SafeImageBackground';
import { StyleSheet } from 'react-native';
import { Button, Body, Container, Header as Header, Icon, Left, Right, Title } from "native-base";

export default class myHeader extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Header
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
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#013146'
  },
  headerTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
