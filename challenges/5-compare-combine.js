const fs = require("fs/promises");

let filename1 = "secret-message.txt";
let filename2 = "super-secret-message.txt";
let strsecret = "";
let strsuper = "";

fs.readFile("./secret-message.txt", "utf-8")
  .then((result) => {
    strsecret = result;
    return fs.readFile("./super-secret-message.txt", "utf-8");
  })
  .then((result2) => {
    strsuper = result2;
    if (strsecret.length > strsuper.length) {
      console.log(
        `${filename1} is longer by ${
          strsecret.length - strsuper.length
        } characters`
      );
    } else if (strsecret.length < strsuper.length) {
      console.log(
        `${filename2} is longer by ${
          strsuper.length - strsecret.length
        } characters`
      );
    } else {
      console.log("them files be the same length");
    }
  })
  .catch((err) => {
    console.log(err);
  });
