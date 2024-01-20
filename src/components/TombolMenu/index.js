import React from 'react';
import { ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const HorizontalButtonScroll = () => {
  return (
    <>
    <ScrollView horizontal style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Terbaru</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Pemrograman</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Teknologi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sistem Operasi</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Desain</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginVertical: 90,
    // height:40
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: 'white',
    justifyContent:'center',
    marginHorizontal: 5,
    borderRadius: 5,
    height:40,
    borderColor:'black',
    borderWidth:2,
    borderRadius:20,


    // fontSize:15,
  },
  buttonText: {
    color: 'black',
    fontSize:15,
    marginHorizontal:20,
  },
});

export default HorizontalButtonScroll;
