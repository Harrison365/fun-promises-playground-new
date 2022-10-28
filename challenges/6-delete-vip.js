const fs = require("fs/promises");
const inquirer = require("inquirer");


const globalArr = []

fs.readFile("./vip-list.txt", "utf8")
  .then((contents) => {
    return contents.split("\n");
  })
  .then((arr) => {
   arr.forEach((person) => {
   globalArr.push(person)
})
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
   const shorterArr = globalArr.filter((person) => {
      return person !== answer.selection
    })
    const shorterStr = shorterArr.join("\n")
    console.log(shorterStr)
    // fs.writeFile("/vip-list.txt", shorterArr
  })
  .catch((err) => {
    console.log(err);
  });
