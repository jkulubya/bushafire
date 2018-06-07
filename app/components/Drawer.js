import React from 'react';
import { DrawerItems, SafeAreaView } from 'react-navigation';
import { ScrollView, StyleSheet } from 'react-native';

const Drawer = (props) => (
  <ScrollView style={styles.background}>
    <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#ffc425'
  },
  container: {
    flex: 1,
    backgroundColor: '#ffc425'
  },
});

export default Drawer;
