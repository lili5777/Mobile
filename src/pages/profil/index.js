import React, {useState} from 'react';
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
import {lili, bulatan, edit, kalender} from '../../assets';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RadioButton} from 'react-native-paper';

const Profil = () => {
  const [checked, setChecked] = useState('cowok');
  return (
    <ScrollView style={{width: '100%'}}>
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

        <Text
          style={{
            fontSize: wp(4),
            marginTop: wp(1),
            textAlign: 'center',
            paddingBottom: wp(5),
          }}>
          Edit personal information
        </Text>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
          }}>
          <Text>Stambuk</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>212040</Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Nama Lengkap</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>
              Muh.ali Ferdiansyah
            </Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Nomor Anggota</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>
              DCC.12IE.AK4.209
            </Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Anggkatan</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>24</Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Tempat Lahir</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>Depok</Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Tanggal Lahir</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>06-09-2000</Text>
            <TouchableOpacity>
              <Image source={kalender} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Jenis Kelamin</Text>

          <RadioButton.Group
            onValueChange={newValue => setChecked(newValue)}
            value={checked}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="cowok" color="#14b1ff" />
                <Text style={{fontSize: 17, fontWeight: '500'}}>Cowok</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton value="cewek" color="#14b1ff" />
                <Text style={{fontSize: 17, fontWeight: '500'}}>Cewek</Text>
              </View>
            </View>
          </RadioButton.Group>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Nomor Telepon</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>089787656788</Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Email</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>
              Zailyanzali@gmail.com
            </Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Alamat</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>Gowa</Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            width: '80%',
            borderBottomWidth: 1,
            borderColor: 'gray',
            paddingBottom: 5,
            paddingTop: 20,
          }}>
          <Text>Kota</Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontSize: 17, fontWeight: '500'}}>Makassar</Text>
            <TouchableOpacity>
              <Image source={edit} style={{width: wp(7), height: wp(7)}} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
    backgroundColor: 'white',
    paddingBottom: wp(20),
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
});
