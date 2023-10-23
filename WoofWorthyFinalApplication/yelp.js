import axios from "axios";

// export const yelpAPIKey = '';


// // const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20',
//   headers: {
//     accept: 'application/json',
//     Authorization: ''
//   }
// };

let axiosArray = [];

async function getYelp() {
  const urlString = "https://yelp-backend.netlify.app/.netlify/functions/search?location=bloomington&term=food"

  const response = await axios.get(urlString);

  let activity = response.data.businesses;

  // console.log(activity);
  let activities = { activity };

  axiosArray.push(activity);

  for (let value of axiosArray) {
      axiosArray.push(activity);
      // console.log('for loop value =', value);
      break;
  }
 
  console.log('array values =', axiosArray);

  // console.log('keys', Object.keys(activities));
  console.log('values', Object.values(activities))

  return activity;

}

const rand_activity = await getYelp();

// console.log('rand_activity =', rand_activity);
