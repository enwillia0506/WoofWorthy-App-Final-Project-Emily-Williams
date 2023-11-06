import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Icon, FlatList, Modal } from 'react-native';

import { Card } from '@rneui/themed';


export default function FindPoke() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);


  const [pokemon, setPokemon] = useState({ pikachu: [], eevee: [], bulbasaur: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pokemonNames = ['pikachu', 'eevee', 'bulbasaur'];
    const fetchPokemonData = async () => {
      try {
        setLoading(true);
        // const response = await Promise.all (
        // //   pokemonNames.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`))

        // );
        const response = {
          pikachu: await fetch(`https://pokeapi.co/api/v2/pokemon/eevee`).then(
            (response) => response.json()),

          eevee: await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`).then(
            (response) => response.json()),

          bulbasaur: await fetch(`https://pokeapi.co/api/v2/pokemon/bulbasaur`).then(
            (response) => response.json())
        }

        setPokemon({
          pikachu: response[0],
          eevee: response[1],
          bulbasaur: response[2]
        })

        console.log(response.pikachu.height);

        // console.log(JSON.stringify(response))
      } catch (err) {
        setError(err);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchPokemonData();
  }, []);


  return (
    <View>
      {/* <View>
        <FlatList
          data={pokemon}
          keyExtractor={(pikachu => pikachu.name)} // make sure item is used and not other for pokemon name data
          renderItem={({ pikachu }) => (
            <Card>
              <CardTitle>{pikachu.name}</CardTitle>
            </Card>
          )}
        />
      </View> */}

      <Text>Test</Text>

      {/* Card Component code from react native elements 
      https://reactnativeelements.com/docs/components/card */}
      
      <Card>
        <Card.Title>Name: Eevee</Card.Title>

        <Card.Image
          style={styles.img}
          source={{
            uri:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
          }}
        />

        <Text style={styles.card}>Height: </Text>
        <Text style={styles.card}>Weight: </Text>
        <Text style={styles.card}>Base experience: </Text>

        {/* Modal Component from React Native example 
        https://reactnative.dev/docs/modal */}

        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>

            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalText}>Additional Eevee details will be here!</Text>
                <Button
                  title='Hide Eevee stats'
                  onPress={() => setModalVisible(!modalVisible)}>
                </Button>
              </View>
            </View>

          </Modal>
          <Button
            title='Show Eevee Stats'
            onPress={() => setModalVisible(true)}>
          </Button>
        </View>

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
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

