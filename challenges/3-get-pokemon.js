//npm i axios
const axios = require("axios");

const pokeApi = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

pokeApi
  .get("pokemon")
  .then((response) => {
    console.log(response.data.results);
  })
  .catch((err) => {
    console.log(err);
  });
