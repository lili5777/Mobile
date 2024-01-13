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
import {lili, bulatan, p1, p2, p3, p4, p5} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Profil = () => {
  return (
    <View style={styles.container}>
      <Image source={bulatan} style={styles.bulat} />
      <Image source={bulatan} style={styles.bulat2} />
      <Image source={bulatan} style={styles.bulat3} />
      <Text
        style={{
          color: 'white',
          fontWeight: 'bold',
          fontSize: wp(6),
          marginTop: wp(8),
          zIndex: 6,
        }}>
        My Profil
      </Text>
      <Image source={lili} style={styles.foto} />
      <View style={styles.koutak}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: wp(5.5),
            color: 'black',
            marginTop: wp(2),
            textAlign: 'center',
          }}>
          Muh.Ali Ferdiansyah
        </Text>
        <Text
          style={{
            fontSize: wp(4),
            marginTop: wp(1),
            textAlign: 'center',
            paddingBottom: wp(5),
          }}>
          Edit personal information
        </Text>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: wp('70%'),
              alignItems: 'center',
              paddingBottom: wp(2),
            }}>
            <Image source={p1} style={{width: wp('13%'), height: wp('13%')}} />
            <Text
              style={{
                fontSize: wp(4),
                paddingLeft: wp(3),
                fontWeight: '500',
                width: wp('50%'),
              }}>
              Profile
            </Text>
            <Text style={{textAlign: 'right', fontSize: wp(6)}}>></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: wp('70%'),
              alignItems: 'center',
              paddingBottom: wp(2),
            }}>
            <Image
              source={p2}
              style={{
                width: wp('10%'),
                height: wp('10%'),
                marginRight: wp('3%'),
              }}
            />
            <Text
              style={{
                fontSize: wp(4),
                paddingLeft: wp(3),
                fontWeight: '500',
                width: wp('50%'),
              }}>
              Language
            </Text>
            <Text style={{textAlign: 'right', fontSize: wp(6)}}>></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: wp('70%'),
              alignItems: 'center',
              paddingBottom: wp(2),
            }}>
            <Image source={p3} style={{width: wp('13%'), height: wp('13%')}} />
            <Text
              style={{
                fontSize: wp(4),
                paddingLeft: wp(3),
                fontWeight: '500',
                width: wp('50%'),
              }}>
              Privacy & Security
            </Text>
            <Text style={{textAlign: 'right', fontSize: wp(6)}}>></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: wp('70%'),
              alignItems: 'center',
              paddingBottom: wp(2),
            }}>
            <Image
              source={p4}
              style={{
                width: wp('10%'),
                height: wp('9%'),
                marginRight: wp('2%'),
                marginLeft: wp('1%'),
              }}
            />
            <Text
              style={{
                fontSize: wp(4),
                paddingLeft: wp(3),
                fontWeight: '500',
                width: wp('50%'),
              }}>
              Saved
            </Text>
            <Text style={{textAlign: 'right', fontSize: wp(6)}}>></Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              width: wp('70%'),
              alignItems: 'center',
              paddingBottom: wp(2),
            }}>
            <Image
              source={p5}
              style={{
                width: wp('10%'),
                height: wp('10%'),
                marginLeft: wp('1%'),
                marginRight: wp('2%'),
              }}
            />
            <Text
              style={{
                fontSize: wp(4),
                paddingLeft: wp(3),
                fontWeight: '500',
                width: wp('50%'),
              }}>
              Help
            </Text>
            <Text style={{textAlign: 'right', fontSize: wp(6)}}>></Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profil;
const tinggi = Dimensions.get('window').height;
const lebar = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  bulat: {
    width: wp(130),
    height: wp(130),
    marginTop: -tinggi * 0.3,
    // width: 50,
    // height: 50,
    zIndex: 2,
  },
  bulat2: {
    width: wp(120),
    height: wp(120),
    marginTop: -tinggi * 0.73,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    // elevation: 24,
    zIndex: 3,
  },
  bulat3: {
    width: wp(120),
    height: wp(120),
    marginTop: -tinggi * 0.73,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    // elevation: 24,
    zIndex: 4,
  },
  foto: {
    width: wp('40%'),
    height: wp('40%'),
    borderRadius: wp('100%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    // elevation: 9,
    marginTop: hp(3),
    zIndex: 5,
  },
  koutak: {
    backgroundColor: 'white',
    paddingHorizontal: wp(5),
    paddingTop: wp(30),
    marginTop: -tinggi * 0.16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 24,
    zIndex: 0,
    paddingBottom: wp(5),
    borderBottomLeftRadius: wp('5%'),
    borderBottomRightRadius: wp('5%'),
  },
});
