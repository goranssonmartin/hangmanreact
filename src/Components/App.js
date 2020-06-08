import React from "react";
import "../Styling/App.css";
import hangmanImage from "../images/hangmanImage.jpg";
import ReactDOM from "react-dom";
import { charArray } from "../words.js";
import Button from "./Button";

const alphabetLetters = "abcdefghijklmnopqrstuvwxyzåäö".split("");
let randomWord = charArray();

const buttonForEachLetter = alphabetLetters.map((letter, index) => (
  <Button
    buttonKey={index}
    onClickFunction={()=>onClickedLetter(index)}
    classNameOfButton={"letterButton"}
    buttonValue={letter}
  />
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
  const disabledButtons = buttons.filter((button) => button.disabled === true);
  disabledButtons.forEach((elem) => {
    elem.disabled = false;
    elem.style.backgroundColor = "#ffc107";
  });
  numberOfGuesses = 0;
  renderPageAgain();
  randomWord = charArray();

  letterCount = randomWord.map((letter, index) => (
    <p className="letterLine" key={index}>
      _
    </p>
  ));
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
      <div id="letterButtonDiv">{buttonForEachLetter}</div>
      <br />
      <button onClick={onResetGame} id="resetButton">
        Reset
      </button>
    </div>
  );
}

export default App;