import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {logo} from '../../assets/images';
import {fb} from '../../assets/images';
import {google} from '../../assets/images';
import {Kotak} from '../../components';

const Login = () => {
  return (
    <View style={{flex: 1}}>
      <LinearGradient
        style={styles.header}
        colors={['#d4f0fe', '#14b1ff']}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1.4}}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.teks}>Welcome !</Text>
      </LinearGradient>
      <Kotak />
      <View>
        <Text
          style={{
            color: '#00A9FF',
            marginTop: 15,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          or Sign in With
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
          }}>
          <TouchableOpacity>
            <Image source={fb} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={google} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{color: '#00A9FF', marginTop: 35, textAlign: 'center'}}>
        Product By Dipanegara Computer Club
      </Text>
    </View>
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
