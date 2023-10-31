import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, ScrollView, Button, Icon } from 'react-native';

import { Card } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function FindPoke({ navigation }) {
  const nav = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  const [pikachuStat, setPikachuStat] = useState([]);
  const [eeveeName, setEeveeName] = useState([]);
  const [eeveeStat, setEeeveeStat] = useState([]);

  const name = ['pikachu', 'eevee', 'bulbasaur']

  const getPokeSpecies = async () => {
    const pikachu = await fetch(`https://pokeapi.co/api/v2/pokemon/${name[0]}`).then(
      (response) => response.json());

    const eevee = await fetch(`https://pokeapi.co/api/v2/pokemon/${name[1]}`).then(
      (response) => response.json());

    setEeveeName(eevee.name);
    setEeeveeStat(eevee.height);

    setPikachuStat([pikachu.name, " ", pikachu.height, " ", pikachu.weight, " ", pikachu.abilities.ability]);

  };

  useEffect(() => {
    getPokeSpecies();
  }, []);



  return (
    <View>
      <View>
        <Card>
          <Card.Title>Name: {eeveeName}</Card.Title>

          {/* <Card.Image
            style={{ height: 210 }}
            source={{
              uri:
                {eeveeStat},
            }}
          /> */}

          <Text style={{ margin: 10 }}>
            Height: {eeveeStat}
          </Text>
          <Button
            title="View full stats" color="#85a2b5"
          />
        </Card>
      </View>
    </View>
  );
}

export default FindPoke;



// import axios from "axios";
// import { NavigationContainer, useNavigation } from '@react-navigation/native';

// let axiosArray = [];

// // async function getPoke() {
// //   const urlString = `https://pokeapi.co/api/v2/pokemon-species/`

// //   const response = await axios.get(urlString);

// //   let pokeName = response.data.results;

// //   // console.log(pokeName);
// //   let pokeNames = { pokeName };

// //   axiosArray.push(pokeName);

// //   for (let value of axiosArray) {
// //     axiosArray.push(pokeName);
// //     // console.log('for loop value =', value);
// //     break;
// //   }

// //   // console.log('array values =', axiosArray);

// //   // console.log('keys', Object.keys(pokeNames));
// //   // console.log('values', Object.values(pokeNames))

// //   return pokeName;

// // }

// // const pokemons = await getPoke();

// // console.log('the pokemon =', pokemons);



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


