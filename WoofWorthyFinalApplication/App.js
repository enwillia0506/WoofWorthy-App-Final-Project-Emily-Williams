// import axios from 'axios';
import 'react-native-gesture-handler';
import React from 'react';

import { Card } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Icon } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Footer from './footer';
import { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons'

import FindPoke from './poke-api';
//api data from https://pokeapi.co/


export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <HeaderLogo {...props} /> }} />
          <Tabs.Screen name="Pokemon" component={Results} options={{ headerTitle: (props) => <HeaderLogo {...props} /> }} />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  )
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.header}>The world is your pokemon</Text>
        <Text style={styles.subHeader}>Find your pokemon stats quick and easy in one central location!
        </Text>

        <Image source={require('./images/eevee-banner.jpg')}
          style={{ width: '100%' }} />

        <Text style={styles.paragraph}>
          Find your favorite pokemon and click on the card to view full stats!</Text>
          <FindPoke />
        <Footer />
      </ScrollView>
      

    </View>
  );
};

function HeaderLogo() {
  return (
    <View style={styles.logo}>
      <Image source={require('./images/poke-logo.png')}
        style={{ width: 40, height: 40, resizeMode: 'center' }} />
      <Text style={{ fontSize: 20, padding: 10 }}>World of Pokemon</Text>
    </View>
  )
}

function Results({ navigation }) {

  return (
    <View>
      <Text>This will be pokemon results</Text>
      <Button title="Go back" color="#85a2b5" onPress={() => navigation.goBack()} />
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    padding: 20,
    backgroundColor: '#fdeec5'
  },
  subHeader: {
    fontSize: 20,
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#fdeec5'
  },
  paragraph: {
    fontSize: 20,
    padding: 10
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    height: '100%'

  },
});
