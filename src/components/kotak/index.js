import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

const Kotak = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          color: '#00A9FF',
          paddingTop: 30,
        }}>
        LOGIN !
      </Text>
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
});
