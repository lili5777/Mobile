import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Splash, Artikel, Kegiatan, Profil,Anggota,Kepanitian} from '../pages';
import {NavigationContainer, TabActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {rumah, artikel, profil, kegiatann} from '../assets';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dashboard"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image source={rumah} style={{width: 30, height: 30}} />
          ),
        }}
      />
      <Tab.Screen
        name="Artikel"
        component={Artikel}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image source={artikel} style={{width: 30, height: 30}} />
          ),
        }}
      />
      <Tab.Screen
        name="Kegiatan"
        component={Kegiatan}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image source={kegiatann} style={{width: 35, height: 30}} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={Profil}
        options={{
          headerShown: false,
          tabBarIcon: ({}) => (
            <Image source={profil} style={{width: 35, height: 30}} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}       /> */}
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Anggota"
          component={Anggota}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Kepanitiaan"
          component={Kepanitian}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
const styles = StyleSheet.create({});
