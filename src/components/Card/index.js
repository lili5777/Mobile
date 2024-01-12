import { Avatar, Button, Card } from 'react-native-paper';
import { tanggal } from '../../assets';
import { StatusBar, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { TouchableOpacity } from 'react-native-gesture-handler';



const MyCard = () => (
    <Card style={styles.card}>
        <TouchableOpacity>
        <View style={styles.container}>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} style={styles.gambar}/>
        </View>

        <Card.Content>
            <Text variant="titleLarge" style={styles.teks}>Apa bedanya Sql dan No Sql</Text>
        </Card.Content>
        <Card.Content style={styles.deskripsi}>
            <Text style={styles.judul}>
                Database
            </Text>
            <Image source={tanggal} style={styles.icon}/>
            <Text style={{ color: 'black' }}>Desember 23, 2024</Text>
        </Card.Content>
    </TouchableOpacity>
    </Card>
);

export default MyCard;

const styles = StyleSheet.create({
    card: {
        // backgroundColor: 'gold',
        paddingTop:10,
        height:hp('36%'),
        marginBottom:10,
    },
    container: {
        // flex:1,
        // justifyContent:'center',
        alignItems:'center',
    },
    gambar:{
        width:wp('80%'),
        height:hp('25%'),
        borderRadius:10,
    },
    teks:{
        fontWeight:'bold',
        fontSize:18,
    },

    deskripsi:{
    flexDirection:'row',
    marginTop:10
    // marginHorizontal:20
    },

    judul:{
    borderColor:'aqua',
    borderWidth:2,
    borderRadius:100,
    padding:5,
    fontSize:10,
    },
    icon:{
        width:20,
        marginLeft:'auto',
        marginHorizontal:9
    }
})