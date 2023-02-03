const fs = require("fs");
const path = require("path");

// do not alter this function
function readSecretFile(cb) {
  const filePath = path.join(__dirname, "../challenges/secret-message.txt");
  fs.readFile(filePath, "utf8", cb);
}

function promisifiedReadSecretFile() {
  const filePath = path.join(__dirname, "../challenges/secret-message.txt");

  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, contents) => {
      if (err) reject(err);
      else resolve(contents);
    });
  });
}

module.exports = { readSecretFile, promisifiedReadSecretFile };
