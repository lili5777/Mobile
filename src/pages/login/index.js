import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {logo} from '../../assets/images';
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
});
