import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {logo} from '../../assets/images';
import {fb} from '../../assets/images';
import {google} from '../../assets/images';
import {Kotak} from '../../components';

const Login = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View>
          <LinearGradient
            style={styles.header}
            colors={['#d4f0fe', '#14b1ff']}
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1.4}}>
            <Image source={logo} style={styles.logo} />
            <Text style={styles.teks}>Welcome !</Text>
          </LinearGradient>
          <Kotak />
          <Text
            style={{color: '#00A9FF', marginVertical: 80, textAlign: 'center'}}>
            Product By Dipanegara Computer Club
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
const styles = StyleSheet.create({
  header: {
    height: 214,
    width: '100%',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 110,
    width: 150,
  },
  teks: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 5,
  },
});
