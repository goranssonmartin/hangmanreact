import React from "react";
import "./App.css";
import hangmanImage from "./images/hangmanImage.jpg";

const words = ["hej", "hejsan", "hallå"];
const alphabetLetters = "abcdefghijklmnopqrstuvwxyzåäö".split("");

var charArray = words[Math.floor(Math.random() * 3)].split("");

var correctWord = () => {
  var currentWord = "";
  var arrayOfCharacters = charArray;
  currentWord = arrayOfCharacters.map((elem) => (currentWord += elem));
  return currentWord[currentWord.length - 1];
};

var buttonForEachLetter = alphabetLetters.map((elem, index) => (
  <button key={index} onClick={() => clickedLetter(index)} className="letterButton">
    {elem}
  </button>
));
console.log(correctWord());

var letterCount = charArray.map((letter, index) => (
  <p className="letterLine" key={index}>
    _
  </p>
));
var numberOfGuesses = 0;

var clickedLetter = (index) => {
  var buttons = document.getElementsByClassName("letterButton");
  var clickedButton = buttons[index];
  clickedButton.disabled = true;
  clickedButton.style.backgroundColor = "#bdbdbd";
};

var resetButtons = () => {
  var buttons = Array.from(document.getElementsByClassName("letterButton"));
  buttons.filter((button) => button.disabled === true).map((button) => {
    button.disabled = false;
    button.style.backgroundColor = "#ffc107";
  });
};

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
      {buttonForEachLetter}
      <button onClick={() => resetButtons()}>Reset</button>
    </div>
  );
}

export default App;
