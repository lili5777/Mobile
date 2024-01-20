import React from 'react';
import { StatusBar, StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import MyCard from '../../components/Card';
import HorizontalButtonScroll from '../../components/TombolMenu';
// import { ScrollView } from 'react-native-gesture-handler';




const Artikel = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Text style={styles.teks}>ARTIKEL</Text>

        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',}}>
          <Text style={styles.menu}>Kategori</Text>
          <HorizontalButtonScroll />
        </View>

        {/* card */}
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />

      </View>
    </ScrollView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    fontSize: 24,
    // backgroundColor:'red',
    width: wp('100%'),
  },
  teks: {
    color: 'black',
    fontSize: 24,
    fontFamily: 'inter',
    fontWeight: 'bold',
    top: 72,
    marginBottom: 90
  },
  menu: {
    fontWeight: '500',
    fontSize: 15,


  },
});

export default Artikel;