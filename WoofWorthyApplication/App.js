import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <View>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeScreen} />
          {/* <Tabs.Screen name="Top 10" component={Top10ListSelectionScreen} /> */}
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  )
}

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
        style={{ width: '100%', height: '77%' }} />


    </View>
    // <NavigationContainer>{}</NavigationContainer>
  );
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
    fontFamily: 'Roboto'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
