import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//my imports
import Footer from './footer';
import FindPoke from './poke-api';
import Details from './details'

//api data from https://pokeapi.co/


export default function App() {
  const Stack = createStackNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <HeaderLogo {...props} /> }} />
          <Stack.Screen name="Pokemon" component={FindPoke} options={{ headerTitle: (props) => <HeaderLogo {...props} /> }} />
          <Stack.Screen name="Details" component={Details} options={{ headerTitle: (props) => <HeaderLogo {...props} /> }} />
          </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

function HomeScreen() {
  const nav = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Text style={styles.header}>The world is your pokemon</Text>
        <Text style={styles.subHeader}>Find your pokemon stats quick and easy in one central location!
        </Text>

        <Image source={require('./images/eevee-banner.jpg')}
          style={{ width: '100%' }} />

        <Text style={styles.paragraph}>
          Click here to enter the catalog of Pokemon and view their stats!</Text>
        <Button
          title="View all Pokemon"
          color= '#38a0bd'
          onPress={() => {
            nav.navigate('Pokemon');
          }}
        />
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

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    padding: 20,
    backgroundColor: '#fbefc3'
  },
  subHeader: {
    fontSize: 20,
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#fbefc3'
  },
  paragraph: {
    fontSize: 20,
    padding: 15,
    backgroundColor: '#fbefc3'
  },
  logo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    backgroundColor: '#fff',
    height: '100%'
  },
});
