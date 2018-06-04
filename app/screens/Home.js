import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header } from 'react-native-elements';

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.body}>
        <Header
          statusBarProps={{ barStyle: 'light-content' }}
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => this.props.navigation.openDrawer(),
          }}
          centerComponent={{ text: 'BUSHAFIRE', style: { color: '#fff', fontWeight: 'bold' } }}
          backgroundColor="#013146"
        />
        <Text>Cool stuffs goes here</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    backgroundColor: '#013146',
    backgroundColor: '#e5e5e5',
    flex: 1,
  },
  item: {
    //height: 30,
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
  },
  itemText:{
    color: '#013146',
    fontSize: 22,
    fontWeight: 'bold'
  },
  separator: {
    height: 1,
    backgroundColor: '#ffbe0f',
  },
});
