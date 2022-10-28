const fs = require("fs/promises");
const inquirer = require("inquirer");

fs.readFile("./vip-list.txt", "utf8")
  .then((contents) => {
    return contents.split("\n");
  })
  .then((arr) => {
    return inquirer.prompt([
      {
        type: "list",
        name: "selection",
        message: "choose person to remove from VIP",
        choices: arr,
      },
    ]);
  })
  .then((answer) => {
    console.log(answer);
  })
  .catch((err) => {
    console.log(err);
  });
