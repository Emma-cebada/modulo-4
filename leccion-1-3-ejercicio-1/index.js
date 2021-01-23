// read-and-write-files-with-one-module
const fileManager = require('./file-manager');

fileManager.readFile('./input.txt', fileContent => {
  const currentDate = new Date().toString();
  const newFileContent = `${currentDate}: ${fileContent}`;
  fileManager.wirteFile('./output.txt', newFileContent, () => {
    console.log('The file has been copied!');
  })
})