import React, { useState } from "react";
import "../Styling/App.css";
import hangmanStage1 from "../images/hangmanStage1.jpg";
import hangmanStage2 from "../images/hangmanStage2.jpg";
import hangmanStage3 from "../images/hangmanStage3.jpg";
import hangmanStage4 from "../images/hangmanStage4.jpg";
import hangmanStage5 from "../images/hangmanStage5.jpg";
import hangmanStage6 from "../images/hangmanStage6.jpg";
import hangmanStage7 from "../images/hangmanStage7.jpg";

import { charArray } from "../words.js";
import Button from "./Button";

function App() {
  const alphabetLetters = "abcdefghijklmnopqrstuvwxyzåäö".split("");
  const disabledButton = alphabetLetters.map((letter) => false);
  const wordLength = () => {
    let arrayOfValues = [];
    randomWord.forEach((elem) => arrayOfValues.push("_"));
    return arrayOfValues;
  };
  const images = [
    hangmanStage1,
    hangmanStage2,
    hangmanStage3,
    hangmanStage4,
    hangmanStage5,
    hangmanStage6,
    hangmanStage7,
  ];

  const [disabledButtons, updateButton] = useState(disabledButton);
  const [randomWord, updateWord] = useState(charArray());
  const [numberOfGuesses, updateGuesses] = useState(0);
  const [currentImage, updateImage] = useState(images[0]);
  const [foundLetters, updateFoundLetters] = useState(wordLength());

  const buttonForEachLetter = alphabetLetters.map((letter, index) => {
    return (
      <Button
        key={index}
        onClickFunction={() => onClickedLetter(index)}
        classNameOfButton={"letterButton"}
        buttonValue={letter}
        isDisabled={disabledButtons[index]}
      />
    );
  });
  const checkCorrectGuess = (index) => {
    const letterToCheck = alphabetLetters[index];
    let currentWord = [...foundLetters];
    let swapped = false;
    randomWord.forEach((letterInWord, index) => {
      if (letterInWord === letterToCheck) {
        currentWord[index] = letterInWord;
        swapped = true;
      }
    });
    if (swapped) {
      updateFoundLetters(currentWord);
      return swapped;
    }
    return swapped;
  };

  const onClickedLetter = (index) => {
    let newArray = [...disabledButtons];
    newArray[index] = true;
    updateButton(newArray);
    if (!checkCorrectGuess(index)) {
      let currentGuess = numberOfGuesses + 1;
      updateGuesses(currentGuess);
      updateImage(images[currentGuess]);
      if (currentGuess === 6) {
        document.getElementById("letterButtonDiv").style.display = "none";
        document.getElementById("youLostDiv").style.display = "block";
      }
    }
  };

  const onResetGame = () => {
    updateGuesses(0);
    updateWord(charArray());
    updateButton(disabledButton);
    updateImage(images[0]);
    updateFoundLetters(wordLength());
    document.getElementById("letterButtonDiv").style.display = "block";
    document.getElementById("youLostDiv").style.display = "none";
    document.getElementById("youWonDiv").style.display = "none";
  };

  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p className="instructionText">
        Gissa vilket det gömda ordet är med hjälp av bokstäverna nedan.
      </p>
      <img src={currentImage} alt="Hangman" id="hangmanImage"></img>
      <br />
      {foundLetters.map((letter, index) => (
        <p className="letterLine" key={index}>
          {letter}
        </p>
      ))}
      <p className="instructionText">Antal gissningar: {numberOfGuesses}</p>
      <div id="letterButtonDiv">{buttonForEachLetter}</div>
      <div id="youLostDiv">
        <p>You Lost</p>
      </div>
      <div id="youWonDiv">
        <p>You Won</p>
      </div>
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
