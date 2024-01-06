import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Artikel = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.teks}>Artikel</Text>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:'24px',
  },
  teks:{
    color:'black',
  },
});

export default Artikel;