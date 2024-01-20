import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import kalender from '../../assets/icon/kalender.png';

const CardKepanitiaan = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Kepanitiaan Penerimaan XXVI</Text>
        <Text style={{textAlign:'center',fontSize: 13,}}>Temz</Text>
        <Text style={{textAlign:'center',fontSize: 13,}}>"Loyalty, generilze and creative"</Text>
        <Text style={{textAlign:'center',fontSize: 13,}}>LOGIC</Text>

        <View style={{flexDirection: 'row',}}>
            <Image source={kalender} style={styles.icon}/>
            <Text style={styles.kalender}>
                10 Agustus - 23 September 2023
            </Text>

            <TouchableOpacity>

            <View style={styles.tombol}>
                <Text style={{fontSize: 12,color:'white'}}>
                    More
                </Text>
            </View>
            </TouchableOpacity>
        </View>

    </View>
  )
}

export default CardKepanitiaan;

const styles = StyleSheet.create({
    container:{
        width: 332,
        // height: 126,
        borderRadius: 21,
        borderWidth: 1,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    text:{
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'center',
        marginTop: 22,
    },
    icon:{
        marginTop: 14,
        marginLeft: 14,
        marginBottom: 6,
    },
    kalender:{
        marginTop: 18,
        marginLeft: 4,
        marginBottom: 10,
        fontSize: 10,
    },
    tombol:{
        backgroundColor: '#0088FF',
        width: 79,
        height: 24,
        borderRadius: 10,
        paddingVertical: 5,
        paddingHorizontal: 25,
        marginLeft: 42,
        marginTop: 14,

        }

})