import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import kiri from '../../assets/icon/kiri.png';
import CardKepanitiaan from '../../components/CardKepanitiaan';

const Kepanitian = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Dashboard')}>
            <Image source={kiri} style={styles.icon} />
          </TouchableOpacity>
          <Text style={styles.judul}>Kepanitiaan</Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              marginLeft: 13,
              marginTop: 14.29,
            }}>
            Committee
          </Text>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#0088FF',
                paddingHorizontal: 18,
                paddingVertical: 5,
                borderRadius: 10,
                left: 16,
                top: 8,
              }}>
              <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>
                Terbaru
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View
              style={{
                backgroundColor: '#0088FF',
                paddingHorizontal: 18,
                paddingVertical: 5,
                borderRadius: 10,
                marginLeft: 29,
                top: 8,
              }}>
              <Text style={{fontSize: 12, fontWeight: '500', color: 'white'}}>
                Terlama
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      {/* main */}
      <View style={{alignItems: 'center'}}>
        <View
          style={{
            width: 352,
            alignItems: 'center',
            backgroundColor: '#D9D9D9',
          }}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <CardKepanitiaan />
            <CardKepanitiaan />
            <CardKepanitiaan />
            <CardKepanitiaan />
            <CardKepanitiaan />
            <CardKepanitiaan />
            <CardKepanitiaan />
            <CardKepanitiaan />
            <CardKepanitiaan />
            <CardKepanitiaan />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default Kepanitian;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'white',
  },
  header: {
    // backgroundColor: 'red',
    height: 100,
    borderRadius: 10,
  },
  icon: {
    width: 32,
    height: 45.71,
    marginLeft: 20,
  },
  judul: {
    fontWeight: 'bold',
    fontSize: 24,
    top: 9,
    left: 73,
  },
});
