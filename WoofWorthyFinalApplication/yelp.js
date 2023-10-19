import axios from "axios";

export const yelpAPIKey = '';


const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.yelp.com/v3/businesses/search?sort_by=best_match&limit=20',
  headers: {
    accept: 'application/json',
    Authorization: ''
  }
};

