//npm i axios
const axios = require("axios");

// const pokeApi = axios.create({ baseURL: "https://pokeapi.co/api/v2/" });

axios //pokiApi.get("pokemon").then...
  .get("https://pokeapi.co/api/v2/pokemon")
  .then((response) => {
    console.log(response.data.results);
  })
  .catch((err) => {
    console.log(err);
  });
