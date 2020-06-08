import React, { useState } from "react";
import "../Styling/App.css";
import hangmanImage from "../images/hangmanImage.jpg";
import { charArray } from "../words.js";
import Button from "./Button";

function App() {
  const alphabetLetters = "abcdefghijklmnopqrstuvwxyzåäö".split("");
  const disabledButton = alphabetLetters.map((letter) => false);

  const [disabledButtons, updateButton] = useState(disabledButton);

  let randomWord = charArray();
  const buttonForEachLetter = alphabetLetters.map((letter, index) => {
    return (
      <Button
        buttonKey={index}
        onClickFunction={() => onClickedLetter(index)}
        classNameOfButton={"letterButton"}
        buttonValue={letter}
        isDisabled={disabledButtons[index]}
      />
    );
  });

  let letterCount = randomWord.map((letter, index) => (
    <p className="letterLine" key={index}>
      _
    </p>
  ));
  let numberOfGuesses = 0;

  const onClickedLetter = (index) => {
    let newArray = [...disabledButtons];
    newArray[index] = true;
    updateButton(newArray);
    numberOfGuesses++;
  };

  const onResetGame = () => {
    numberOfGuesses = 0;
    randomWord = charArray();
    updateButton(disabledButton);
    letterCount = randomWord.map((letter, index) => (
      <p className="letterLine" key={index}>
        _
      </p>
    ));
  };
  
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
      <Button
        onClickFunction={onResetGame}
        classNameOfButton="resetButton"
        buttonValue="Reset"
      />
    </div>
  );
}

export default App;
