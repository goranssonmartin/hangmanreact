import React from "react";
import "./App.css";
import hangmanImage from "./images/hangmanImage.jpg";

const words = ["hej", "hejsan", "hallå"];
var charArray = () => {
  return words[Math.floor(Math.random() * 3)].split("");
};

var correctWord = () => {
  var currentWord = "";
  var arrayOfCharacters = charArray();
  currentWord = arrayOfCharacters.map((elem) => (currentWord += elem));
  return currentWord[currentWord.length - 1];
};
console.log(correctWord());

var letterCount = charArray().map((letter, index) => (
  <p className="letterLine" key={index}>
    _
  </p>
));
var numberOfGuesses=0;

function App() {
  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p className="instructionText">
        Gissa vilket ord det är med hjälp av bokstäverna nedan. Du har åtta
        gissningar
      </p>
      <img src={hangmanImage} alt="Hangman" id="hangmanImage"></img>
      <br />
      {letterCount}
      <p className="instructionText">Antal gissningar: {numberOfGuesses}</p>
      <button className="letterButton">a</button>
    </div>
  );
}

export default App;
