import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Icon, FlatList, Modal } from 'react-native';

import { Card } from '@rneui/themed';


export default function FindPoke() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);


  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const pokemonNames = ['pikachu', 'eevee', 'bulbasaur', 'ditto', 'charmander', 'squirtle'];
    const fetchPokemonData = async () => {
      try {
        setLoading(true);
        const responses = await Promise.all(
          pokemonNames.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json()))
        );

        // Set the state with the fetched data
        setPokemon(responses);
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
      <View>
        {/* Card Component code from react native elements 
      https://reactnativeelements.com/docs/components/card */}

        <FlatList
          data={pokemon}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => ( // use "item" here, not "pikachu"
            <Card>
              <Card.Title>{item.name}</Card.Title>
              <Text style={styles.card}>Height: {item.height}</Text>
              <Text style={styles.card}>Weight: {item.weight}</Text>
              <Text style={styles.card}>Base experience: {item.base_experience}</Text>
              
            </Card>
          )}
        />
      </View>

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

