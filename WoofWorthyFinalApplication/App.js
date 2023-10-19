import axios from 'axios';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {} from './yelp'

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeScreen} />
          <Tabs.Screen name="Restaurants" component={Card} />
        </Tabs.Navigator>
      </NavigationContainer>
      
      {/* <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        /> */}
      {/* <TextBar /> */}

      
    </View>
  )
}

let axiosArray = [];

async function getRandom() {
    const urlString = "https://api.yelp.com/v3/businesses";

    const response = await axios.get(urlString);

    let activity = response.data.message;
    console.log(activity);
    let activities = { activity }

    axiosArray.push(activity);

    for (let value of axiosArray) {
        axiosArray.push(activity);
        axiosArray.push(activity);
        console.log('for loop value =', value);
        break;
    }
   
    console.log('array values =', axiosArray);

    console.log('keys', Object.keys(activities));
    console.log('values', Object.values(activities))

    return activity;
}

const rand_activity = await getRandom();

console.log('rand_activity =', rand_activity);

function HomeScreen() {
  return (
    <View>
      <Text style={styles.header}>Find a restaurant that is woof worthy</Text>
      {/* <SearchBar
          placeholder="Type Here..."
          onChangeText={updateSearch}
          value={search}
        /> */}
      <TextBar />

      <Image source={require('./images/dog-banner.jpeg')}
         style={{width: '100%', height: '77%'}}/>


    </View>
    
  );
};

function Card() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  )
}
function TextBar() {
  const [text, onChangeTextBar] = React.useState('Search Restaurants');

  return (
    <View>
      <TextInput
        style={styles.textBar}
        onChangeText={onChangeTextBar}
        value={text}
      />

    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    padding: 20,
    backgroundColor: '#b0cadb'
  },
  textBar: {
    height: 60,
    padding: 10,
    fontFamily: 'Roboto',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    height: '100%'
   
  },
});
