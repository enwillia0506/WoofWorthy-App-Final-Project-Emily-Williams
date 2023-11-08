import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Icon, FlatList, Modal } from 'react-native';

import { Card } from '@rneui/themed';
import Footer from './footer';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './details';

// const Stack = createStackNavigator();

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Details" component={Details} />
//     </Stack.Navigator>
//   );
// }

export default function FindPoke() {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [showModalData, setShowModalData] = useState(null);

  const [buttonClicked, setButtonClicked] = useState();


  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // const pokemonNames = ['pikachu', 'eevee', 'bulbasaur', 'ditto', 'charmander', 'squirtle', 'raichu'];
    //using pokemon id numbers instead of names so array isnt so long
    const pokemonNames = ['133', '25', '1', '132', '4', '7', '26', '39', '43', '50', '52', '54', '37', '77', '104', '116', '134', '135', '136', '143'];
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
              <Card.Title>{item.name}</Card.Title>
              <Card.Image
                style={{ height: 300, resizeMode: 'stretch' }}
                source={{
                  uri: `${item.sprites.other.home.front_default}`
                }}
              />
              <Text style={styles.card}>Height: {item.height}</Text>
              <Text style={styles.card}>Weight: {item.weight}</Text>
              <Text style={styles.card}>Base experience: {item.base_experience}</Text>

              {/* <Button
                title='Show Additional Stats'
                onPress={() => {
                  setModalVisible(true)
                  setShowModalData(item)
                }}
              >
              </Button> */}
              <Button
                title="View additional stats"
                color='#38a0bd'
                onPress={() => {
                  navigation.navigate('Details');
                  return (
                    <View>
                      <Text>Hello</Text>
                    </View>
                  )
                }}
              />
            </Card>
          )}
        />
      </View>

      <Footer />
      

      {/* Modal Component from React Native example 
        https://reactnative.dev/docs/modal */}

      {/* <View> */}
      
      {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>

          
            <View style={styles.modalView}>
             <Text>Test</Text>
              <Button
                title='Hide Eevee stats'
                onPress={() => setModalVisible(!modalVisible)}>
              </Button>
            </View>
          

        </Modal> */}
      {/* </View> */}

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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  //modal styling from modal component sample code cited above
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

