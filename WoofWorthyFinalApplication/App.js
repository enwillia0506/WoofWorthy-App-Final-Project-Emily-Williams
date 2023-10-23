// import axios from 'axios';
import React from 'react';
// import { Card } from '@rneui/themed';
import { StyleSheet, Text, View, Image, TextInput, ScrollView } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Footer from './footer';


export default function App() {
  const Tabs = createBottomTabNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Tabs.Navigator>
          <Tabs.Screen name="Home" component={HomeScreen} />
          <Tabs.Screen name="Restaurants" component={Results} />
        </Tabs.Navigator>
      </NavigationContainer>
    </View>
  )
}



function HomeScreen() {
  return (
    <View>
      <ScrollView>


        <Text style={styles.header}>Find a restaurant that is woof worthy</Text>

        {/* <TextBar /> */}


        <Image source={require('./images/dog-banner.jpg')}
          style={{ width: '100%' }} />
          <Card>
          <Card.Title>HELLO WORLD</Card.Title>
          <Card.Divider />
          <Card.Image
            style={{ padding: 0 }}
            source={{
              uri:
                'https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg',
            }}
          />
          <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card>

        


        <Footer />

      </ScrollView>

    </View>



  );
};

function Results() {
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
    // flex: 1,
    backgroundColor: '#fff',
    height: '100%'

  },
});
