const fs = require("fs/promises");

fs.readFile("./secret-message.txt", "utf8")
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
