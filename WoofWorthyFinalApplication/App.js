// import axios from 'axios';
import 'react-native-gesture-handler';
import React from 'react';

import { Card } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Icon } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Footer from './footer';

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeScreen} options={{ headerTitle: (props) => <HeaderLogo {...props} /> }} />
          <Tabs.Screen name="Restaurants" component={Results} options={{ headerTitle: (props) => <HeaderLogo {...props} /> }} />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  )
}


function HomeScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
        <Text style={styles.header}>Find a restaurant that is woof worthy</Text>
        <Text style={styles.subHeader}>Looking for that perfect restaurant to go to with your perfect pup?
        </Text>

        <Image source={require('./images/dog-banner.jpg')}
          style={{ width: '100%' }} />

        <Text style={styles.paragraph}>
          See suggested restaurants below or use the navigation to view all restaurants!</Text>

        <View style={{margin: 10}}>
          <Button title="View all restaurants" color="#85a2b5" onPress={() => {
            navigation.navigate("Restaurants")
          }} />
        </View>

        <CardComponent />

        <Footer />
      </ScrollView>
    </View>
  );
};

function HeaderLogo() {
  return (
    <View style={styles.logo}>
      <Image source={require('./images/logo-2.png')}
        style={{ width: 50, height: 50, resizeMode: 'center' }} />
      <Text style={{ fontSize: 20, padding: 10 }}>WoofWorthy</Text>
    </View>
  )
}

function CardComponent() {
  return (
    <View>
      <Card>
        <Card.Title>Smokeworks</Card.Title>

        <Card.Image
          style={{ height: 210 }}
          source={{
            uri:
              'https://s3-media1.fl.yelpcdn.com/bphoto/gyy1F0qbPrsjLeSjh9Wsyw/o.jpg',
          }}
        />
        <Text style={{ margin: 10 }}>
          Bloomington, IN
        </Text>
        <Button
          title="View restaurant details" color="#85a2b5"
        />
      </Card>
    </View>
  )
}

function Results({ navigation }) {

  return (
    <View>
      <Text>This will be restaurant results</Text>
      <Button title="Go back" color="#85a2b5" onPress={() => navigation.goBack()} />
    </View>
  )
}


const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    padding: 20,
    backgroundColor: '#b0cadb'
  },
  subHeader: {
    fontSize: 20,
    padding: 20,
    paddingTop: 0,
    backgroundColor: '#b0cadb'
  },
  paragraph: {
    fontSize: 15,
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
