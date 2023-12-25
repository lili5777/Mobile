import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {user} from '../../assets/images';
import {kunci} from '../../assets/images';

const Kotak = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: '#00A9FF',
          paddingTop: 30,
          paddingBottom: 25,
        }}>
        LOGIN !
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View style={styles.bulat}>
          <Image source={user} style={styles.orang} />
        </View>
        <TextInput style={styles.input} placeholder="Username" />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View style={styles.bulat}>
          <Image source={kunci} style={styles.kunci} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={{marginLeft: 110, marginBottom: 20}}>
        <Text style={{color: '#00A9FF'}}>Forget Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Kotak;
const tinggi = Dimensions.get('window').height;
const lebar = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 30,
    borderRadius: 10,
    shadowColor: '#00A9FF',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
    marginTop: -tinggi * 0.04,
  },
  input: {
    shadowColor: '#00A9FF',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 230,
    paddingLeft: 40,
    height: 50,
  },
  bulat: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: -lebar * 0.07,
    position: 'relative',
    zIndex: 1,
    backgroundColor: 'white',
    width: 50,
    height: 50,
    borderRadius: 100,
    shadowColor: '#00A9FF',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

    elevation: 18,
  },
  orang: {
    width: 30,
    height: 30,
  },
  kunci: {
    width: 18,
    height: 23,
  },
  loginButton: {
    backgroundColor: '#00A9FF',
    borderRadius: 10,
    width: 150,
    padding: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
