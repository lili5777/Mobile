import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    // <NavigationContainer>
    //   <Router />
    // </NavigationContainer>
    // );
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <Router />
    </>
  );
};

export default App;
const styles = StyleSheet.create({});
