import React from "react";
import "./App.css";
import hangmanImage from "./images/hangmanImage.jpg";
import ReactDOM from "react-dom";
import { charArray} from "./words.js";

const alphabetLetters = "abcdefghijklmnopqrstuvwxyzåäö".split("");
let randomWord = charArray();

const buttonForEachLetter = alphabetLetters.map((letter, index) => (
  <button
    key={index}
    onClick={()=>onClickedLetter(index)}
    className="letterButton"
  >
    {letter}
  </button>
));

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

const onClickedLetter = (index) => {
  const buttons = document.getElementsByClassName("letterButton");
  const clickedButton = buttons[index];
  clickedButton.disabled = true;
  clickedButton.style.backgroundColor = "#bdbdbd";
  numberOfGuesses++;
  renderPageAgain();
};

const onResetGame = () => {
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
  //let correcWordToString = randomWord.join("");
};

function App() {
  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p className="instructionText">
        Gissa vilket det gömda ordet är med hjälp av bokstäverna nedan.
      </p>
      <img src={hangmanImage} alt="Hangman" id="hangmanImage"></img>
      <br />
      {letterCount}
      <p className="instructionText">Antal gissningar: {numberOfGuesses}</p>
      {buttonForEachLetter}
      <br />
      <button onClick={onResetGame} id="resetButton">
        Reset
      </button>
    </div>
  );
}

export default App;
