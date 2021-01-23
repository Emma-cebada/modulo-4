// read-and-write-files-with-one-module
const fs = require('fs');

const readFile = (fileName, callback) => {
  fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      console.log('Error:', err);
    } else {
      callback(data);
    }
  })
}

const wirteFile = (fileName, fileContent, callback) => {
  fs.writeFile(fileName, fileContent, err => {
    if (err) {
      console.log('Error', err);
    } else {
      callback();
    }
  })
}

module.exports = {
  readFile,
  wirteFile
}