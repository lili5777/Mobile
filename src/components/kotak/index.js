import React, {useState, useEffect} from 'react';
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
import {eye} from '../../assets/images';
import {noteye} from '../../assets/images';
import {wrong} from '../../assets/images';
import Modal from 'react-native-modal';
import {useNavigation} from '@react-navigation/native';

const Kotak = () => {
  const navigation = useNavigation();
  const [gagal, setgagal] = useState(false);

  // const [isModalVisible, setModalVisible] = useState(false);

  const modalgagal = () => {
    setgagal(!gagal);
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = () => {
    setShowPassword(!showPassword);
    // Tempatkan logika login Anda di sini
    if (username === 'bahar' && password === '123') {
      // Alert.alert('Login berhasil');
      navigation.navigate('MainApp');
    } else {
      setgagal(!gagal);
    }
  };
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
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={text => setUsername(text)}
        />
      </View>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <View style={styles.bulat}>
          <Image source={kunci} style={styles.kunci} />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          secureTextEntry={showPassword}
        />
        <TouchableOpacity
          onPress={togglePasswordVisibility}
          style={styles.hide}>
          <Image source={showPassword ? noteye : eye} />
          {/* <Text>{showPassword ? 'Hide Password' : 'Show Password'}</Text> */}
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{marginLeft: 110, marginBottom: 20}}>
        <Text style={{color: '#00A9FF'}}>Forget Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Modal isVisible={gagal}>
        <View style={styles.modal}>
          <View style={styles.modall}>
            {/* <View
              style={{
                flex: 1,
                backgroundColor: '#00A9FF',
                borderTopEndRadius: 20,
                borderTopStartRadius: 20,
                height: '100%',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image source={wrong} style={{width: 92, height: 80}} />
            </View> */}

            <Text
              style={{
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 20,
                color: 'black',
              }}>
              Login Failed !
            </Text>
            <Text
              onPress={modalgagal}
              style={{textAlign: 'center', fontSize: 15, marginTop: 15}}>
              Please check your username and password
            </Text>
          </View>
        </View>
      </Modal>
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
  hide: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -lebar * 0.07,
    position: 'relative',
    zIndex: 1,
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
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modall: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    width: 250,
    height: 180,
    borderRadius: 20,
  },
});
