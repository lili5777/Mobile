import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000);
  }, [navigation]);
  return (
    <View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({});
