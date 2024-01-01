import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  TextInput,
} from 'react-native';
import {lili} from '../../assets';

const Profil = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={lili} style={styles.foto} />
      </View>
      <View style={styles.bg}>
        <Text style={{fontSize: 15}}>Stambuk</Text>
        <View style={{flexDirection: 'row'}}>
          <TextInput
            style={{
              borderBottomWidth: 1,
              width: '100%',
              borderBottomColor: 'gray',
              fontWeight: 'bold',
              backgroundColor: 'red',
              height: 40,
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Profil;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingTop: 60,
    paddingBottom: 30,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  bg: {
    marginHorizontal: 50,
  },
});
