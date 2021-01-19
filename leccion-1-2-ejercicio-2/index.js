const fs = require("fs");

const fileContent = "Qué felicidad poder aprender algo de Back end!";

const handleFile = (err, fileContent) => {
  if (err) {
    console.log("Error:", err);
  } else {
    //consolear el objeto en modo texto
    console.log("Contenido del fichero en formato texto", fileContent);
    // consolear el objeto en modo objeto
    // const jsonData = JSON.parse(fileContent);
    // console.log("Contenido del fichero en formato objeto:", jsonData);
  }
}

fs.readFile("./input.json", "utf8", handleFile);