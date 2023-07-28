//npm i inquirer (with version) (npm install --save inquirer@^8.0.0)

const inquirer = require("inquirer");

inquirer
  .prompt([{ name: "user_name", type: "input", message: "What is your name?" }])
  .then((response) => {
    console.log(`Hello ${response.user_name}`);
  })
  .catch((err) => {
    console.log(err);
  });
