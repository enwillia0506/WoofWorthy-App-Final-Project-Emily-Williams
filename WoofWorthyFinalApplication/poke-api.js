import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Modal } from 'react-native';
import { Card } from '@rneui/themed';

//my imports
import Footer from './footer';

export default function FindPoke() {
  const navigation = useNavigation();

  //state for details button
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  //holds api data
  const [pokemon, setPokemon] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    //using pokemon id numbers instead of names so array isnt so long
    const pokemonNames = ['133', '25', '1', '132', '4', '7', '26', '39', '43', '50', '52', '54', '37', '77', '104', '116', '134', '135', '136', '143'];

    const fetchPokemonData = async () => {
      try {
        setLoading(true);
        //fetch api data
        const responses = await Promise.all(
          pokemonNames.map(name => fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(res => res.json()))
        );

        // Set the state with the fetched data from api
        setPokemon(responses);
        //catch any errors
      } catch (err) {
        setError(err);
        console.log(err);
        //function is done so set loading to false
      } finally {
        setLoading(false);
      }
    };
    //run async function
    fetchPokemonData();
  }, []);

  //set data of selected pokemon to get correct pokemon stats for selected card
  const handleDetailsClick = (pokemon) => {
    setSelectedPokemon(pokemon);
  }

  //set up flatlist cards to return api data and selected pop-up modal
  return (
    <View style={{ flex: 1, flexGrow: 1 }}>
      <Text style={styles.paragraph}>View all Pokemon below!</Text>
      <Button title="Go back home" color="#38a0bd" onPress={() => navigation.goBack()} />

      <View style={{ flex: 1, flexGrow: 1, marginBottom: 10 }}>
        {/* Card Component code from react native elements 
      https://reactnativeelements.com/docs/components/card */}

        <FlatList
          data={pokemon}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <Card>
              <Card.Title style={{ fontWeight: 'bold', fontSize: 22 }}>{item.name}</Card.Title>
              <Card.Image
                style={{ height: 300, resizeMode: 'stretch' }}
                source={{
                  uri: `${item.sprites.other.home.front_default}`
                }}
              />
              <Button title="View Stats" color="#38a0bd" onPress={() => handleDetailsClick(item)} />
            </Card>
          )}
        />
      </View>

      {/* Modal Component from React Native example 
        https://reactnative.dev/docs/modal 
        Modal card shows stat details when clicked */}
      <Modal
        animationType='slide'
        transparent={true}
        visible={selectedPokemon !== null}
        onRequestClose={() => {
          selectedPokemon(null);
        }}>

        {selectedPokemon && (
          <View style={styles.centeredView}>
            <View style={styles.modalView}>

              <Text style={styles.boldText}>Name: {selectedPokemon.name}</Text>
              <Text style={styles.modalText}>Type: {selectedPokemon.types[0].type.name}</Text>
              <Text style={styles.modalText}>Height: {selectedPokemon.height}</Text>
              <Text style={styles.modalText}>Weight: {selectedPokemon.weight}</Text>
              <Text style={styles.modalText}>Base experience: {selectedPokemon.base_experience}</Text>

              <Text style={styles.modalText}>HP: {selectedPokemon.stats[0].base_stat}</Text>

              <Button title="Close" color="#38a0bd" onPress={() => setSelectedPokemon(null)} />
            </View>
          </View>
        )}
      </Modal>

      <Footer />
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
  paragraph: {
    fontSize: 25,
    padding: 10,
    textAlign: 'center'
  },
  boldText: {
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 20
  },
  //modal styling from modal component sample code cited above
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 20,
    padding: 40,
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
    fontSize: 20
  },
});

