import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Anggota = () => {
  return (
    <View style={styles.container}>
      <Text>Anggota</Text>
    </View>
  );
};

export default Anggota;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
