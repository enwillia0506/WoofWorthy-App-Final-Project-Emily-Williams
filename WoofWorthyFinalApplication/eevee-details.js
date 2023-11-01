import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Icon, FlatList } from 'react-native';

import { Card } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function FindEevee() {

    

  const [eeveeName, setEeveeName] = useState([]);
  const [eeveeHeight, setEeeveeHeight] = useState([]);
  const [eeveeExperience, setEeveeExperience] = useState([]);
  const [eeveeWeight, setEeveeWeight] = useState([]);

  const getEeveeDetails = async () => {
    const eevee = await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`).then(
      (response) => response.json());

    ///eevee stats 
    setEeveeName(eevee.results);
    setEeeveeHeight(eevee.height);
    setEeveeExperience(eevee.base_experience);
    setEeveeWeight(eevee.weight)
  };

  useEffect(() => {
    getPokeSpecies();
  }, []);

  return (
    <View>

      <Card>
        <Card.Title>Name: {eeveeName}</Card.Title>

        <Card.Image
          style={styles.img}
          source={{
            uri:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
          }}
        />

        <Text style={styles.card}>Height: {eeveeHeight}</Text>
        <Text style={styles.card}>Weight: {eeveeWeight}</Text>
        <Text style={styles.card}>Base experience: {eeveeExperience}</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    height: 210,
    resizeMode: 'contain'
  },
  card: {
    margin: 5,
    fontSize: 15
  }
});