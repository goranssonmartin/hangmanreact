import React from "react";
import "./App.css";
import hangmanImage from "./images/hangmanImage.jpg";

function App() {
  return (
    <div className="App">
      <h1>Hänga gubbe</h1>
      <p>
        Gissa vilket ord det är med hjälp av bokstäverna nedan. Du har åtta
        gissningar
      </p>
      <img src={hangmanImage} alt="Hangman" id="hangmanImage"></img>
    </div>
  );
}

export default App;
