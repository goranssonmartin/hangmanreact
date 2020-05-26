import React from "react";
import "./App.css";
import hangmanImage from "./images/hangmanImage.jpg";
import ReactDOM from "react-dom";
import { charArray, correcWord } from "./words.js";

const alphabetLetters = "abcdefghijklmnopqrstuvwxyzåäö".split("");
let randomWord = charArray();

const buttonForEachLetter = alphabetLetters.map((letter, index) => (
  <button
    key={index}
    onClick={() => clickedLetter(index)}
    className="letterButton"
  >
    {letter}
  </button>
));
console.log(correcWord(randomWord));

let letterCount = randomWord.map((letter, index) => (
  <p className="letterLine" key={index}>
    _
  </p>
));
let numberOfGuesses = 0;

const renderPageAgain = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
};

const clickedLetter = (index) => {
  const buttons = document.getElementsByClassName("letterButton");
  const clickedButton = buttons[index];
  clickedButton.disabled = true;
  clickedButton.style.backgroundColor = "#bdbdbd";
  numberOfGuesses++;
  renderPageAgain();
};

const resetButtons = () => {
  const buttons = Array.from(document.getElementsByClassName("letterButton"));
  buttons
    .filter((button) => button.disabled === true)
    .map((button) => {
      button.disabled = false;
      button.style.backgroundColor = "#ffc107";
      return "buttons reset";
    });
  numberOfGuesses = 0;
  renderPageAgain();
  randomWord = charArray();

  letterCount = randomWord.map((letter, index) => (
    <p className="letterLine" key={index}>
      _
    </p>
  ));
  let correcWordToString = randomWord.join("");
  console.log(correcWordToString);
};

function App() {
  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p className="instructionText">
        Gissa vilket ord det är med hjälp av bokstäverna nedan. Du har åtta
        gissningar.
      </p>
      <img src={hangmanImage} alt="Hangman" id="hangmanImage"></img>
      <br />
      {letterCount}
      <p className="instructionText">Antal gissningar: {numberOfGuesses}</p>
      {buttonForEachLetter}
      <br />
      <button onClick={resetButtons} id="resetButton">
        Reset
      </button>
    </div>
  );
}

export default App;
