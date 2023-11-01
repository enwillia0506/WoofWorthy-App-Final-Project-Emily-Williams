import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Icon, FlatList,  } from 'react-native';

import { Card } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
import FindEevee from './eevee-details';


function navStack() {
    const Stack = createStackNavigator();
    

  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="eevee" component={FindEevee} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

navStack()


export default function FindPoke() {
  const navigation = useNavigation();
  
  // const [isLoading, setIsLoading] = useState(true);

  const [pikachuName, setPikachuName] = useState([]);
  const [pikachuHeight, setPikachuHeight] = useState([]);
  const [pikachuExperience, setPikachuExperience] = useState([]);
  const [pikachuWeight, setPikachuWeight] = useState([]);

  // const [{pikachuName, pikachuHeight, pikachuExperience, pikachuWeight}, setState] = useState([]);

  const [eeveeName, setEeveeName] = useState([]);
  const [eeveeHeight, setEeeveeHeight] = useState([]);
  const [eeveeExperience, setEeveeExperience] = useState([]);
  const [eeveeWeight, setEeveeWeight] = useState([]);

  const [bulbaName, setBulbaName] = useState([]);
  const [bulbaHeight, setBulbaHeight] = useState([]);
  const [bulbaExperience, setBulbaExperience] = useState([]);
  const [bulbaWeight, setBulbaWeight] = useState([]);

  const name = ['pikachu', 'eevee', 'bulbasaur']

  const baseURL = 'https://pokeapi.co/api/v2/pokemon'

  const getPokeSpecies = async () => {
    const pikachu = await fetch(`${baseURL}/${name[0]}`).then(
      (response) => response.json());

    const eevee = await fetch(`${baseURL}/${name[1]}`).then(
      (response) => response.json());

    const bulbasaur = await fetch(`${baseURL}/${name[2]}`).then(
      (response) => response.json());

    ///eevee stats 
    setEeveeName(eevee.results);
    setEeeveeHeight(eevee.height);
    setEeveeExperience(eevee.base_experience);
    setEeveeWeight(eevee.weight)

    ///pikachu stats
    setPikachuName(pikachu.name);
    setPikachuHeight(pikachu.height);
    setPikachuExperience(pikachu.base_experience);
    setPikachuWeight(pikachu.weight)

    ///bulbasaur stats
    setBulbaName(bulbasaur.name);
    setBulbaHeight(bulbasaur.height);
    setBulbaExperience(bulbasaur.base_experience);
    setBulbaWeight(bulbasaur.weight)
  };

  useEffect(() => {
    getPokeSpecies();
  }, []);

  // const renderItem = ({ item }) => {

  //   return ( 
  //     <Card>
  //       <CardTitle>
  //         {item}
  //       </CardTitle>
  //     </Card>
  //   )
  // }

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

        <Button
          title="View full stats" color="#85a2b5" onPress={() => {
            navigation.navigate("eevee")
          }}
        />
      </Card>

      
      <Card>

        <Card.Title>Name: {pikachuName}</Card.Title>

        <Card.Image
          style={styles.img}
          source={{
            uri:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png',
          }}
        />

        <Text style={styles.card}>Height: {pikachuHeight}</Text>
        <Text style={styles.card}>Weight: {pikachuWeight}</Text>
        <Text style={styles.card}>Base experience: {pikachuExperience}</Text>

        <Button
          title="View full stats" color="#85a2b5"
        />
      </Card>

      <Card>
        <Card.Title>Name: {bulbaName}</Card.Title>

        <Card.Image
          style={styles.img}
          source={{
            uri:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
          }}
        />

        <Text style={styles.card}>Height: {bulbaHeight}</Text>
        <Text style={styles.card}>Weight: {bulbaWeight}</Text>
        <Text style={styles.card}>Base experience: {bulbaExperience}</Text>

        <Button
          title="View full stats" color="#85a2b5"
        />
      </Card>

    {/* {eevee && (
             <FlatList
               eevee={eevee}
               renderItem={renderItem}
               keyExtractor={(item) => item.id.toString()}
             />
          )} */}
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


// export default FindPoke;

// function PokeArray() {
//   const baseURL = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0'

//   let pokemonArray = [];

//   const getPokeSpecies = async () => {
//     const pokemon = await fetch(`${baseURL}`).then(
//       (response) => response.json());

//     let findResults = pokemon.results;

//     let findPokes = { findResults };

//     pokemonArray.push(findResults);

//     for (let value of pokemonArray) {
//       pokemonArray.push(findResults);
//       console.log('for loop value =', value);
//       break;
//     }

//     console.log(pokemonArray);
//     // console.log('keys', Object.keys(findPokes));
//     console.log('values', Object.values(findPokes))
//   };

//   useEffect(() => {
//     getPokeSpecies();
//   }, []);

//   return (
//     <View>
//       <Card>
//         <Card.Title>Name: {pokemonArray}</Card.Title>

//         <Card.Image
//           style={styles.img}
//           source={{
//             uri:
//               'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/133.png',
//           }}
//         />

//         {/* <Text style={styles.card}>Height: {eeveeHeight}</Text>
//         <Text style={styles.card}>Weight: {eeveeWeight}</Text>
//         <Text style={styles.card}>Base experience: {eeveeExperience}</Text> */}

//         <Button
//           title="View full stats" color="#85a2b5"
//         />
//       </Card>
//     </View>
//   )
// }

// getPokeSpecies();



// import axios from "axios";
// import { NavigationContainer, useNavigation } from '@react-navigation/native';

// let axiosArray = [];

// async function getPoke() {
//   const urlString = `https://pokeapi.co/api/v2/pokemon-species/`

//   const response = await axios.get(urlString);

//   let pokeName = response.data.results;

  // console.log(pokeName);
  // let pokeNames = { pokeName };

  // axiosArray.push(pokeName);

  // for (let value of axiosArray) {
  //   axiosArray.push(pokeName);
  //   // console.log('for loop value =', value);
  //   break;
  // }

  // console.log('array values =', axiosArray);

  // console.log('keys', Object.keys(pokeNames));
  // console.log('values', Object.values(pokeNames))

//   return pokeName;

// }

// const pokemons = await getPoke();

// console.log('the pokemon =', pokemons);



// function FindPoke({ navigation }) {
//   const nav = useNavigation();
//   const [isLoading, setIsLoading] = useState(true);
//   const [pokeSpecies, setPokeSpecies] = useState('Placeholder');

//   const [count, setCount] = useState(0)

//   const getPokeSpecies = async () => {
//     const poke = await fetch('https://pokeapi.co/api/v2/pokemon-species/').then(
//       (response) => response.json());

//     setPokeSpecies(poke);
//   };

//   useEffect(() => {
//     getPokeSpecies();
//   }, []);

//   return (
//     <View>
//       <View>
//         <Text>Joke category: {pokeSpecies}</Text>
//         <Text>Cities of the day</Text>
//       </View>
//     </View>
//   );
// }


