import { useState } from "react";
import clsx from "clsx";
import { words } from "./words";
import Confetti from "react-confetti";
import LangCard from "./LangCard";
import LetterPad from "./LetterPad";
import LetterElement from "./LetterElement";
import { languages } from "../languages";

export default function Header() {
  const [currentWord, setCurrentWord] = useState(words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState([]);
  console.log(currentWord);


  const isGameWon = currentWord.split("").every(letter => guessedLetters.includes(letter));
  const wrongGussedCounter = guessedLetters.filter(letter => !currentWord.includes(letter)).length;
  const isGameLost = wrongGussedCounter >= languages.length - 1;
  const isGameOver = isGameWon || isGameLost;

  const gameStatusClass = clsx("game-status", { won: isGameWon, lost: isGameLost });

  function addGuessedLetter(letter) {
    setGuessedLetters(prev => prev.includes(letter) ? prev : [...prev, letter]);
  }

  function startNewGame() {
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
  }

  return (
    <header className="header">
      {isGameWon && <Confetti />}
      <h1>Assembly Endgame</h1>
      <h6>Guess the word with 8 attempts to keep the programming world safe from Assembly</h6>
      
      <section className={gameStatusClass}>
        {isGameLost && <><h2>You lOST!</h2><p>lOST!</p></>}
        {isGameWon && <><h2>You win!</h2><p>Well done!</p></>}
      </section>

      <section className="language-chips">
        <LangCard wrongGussedCounter={wrongGussedCounter} />
      </section>

      <section className="word">
        <LetterElement currentWord={currentWord} guessedLetters={guessedLetters} />
      </section>

      <section>
        <div className="alphapet-contanier">
          <LetterPad 
            currentWord={currentWord}
            isGameOver={isGameOver}
            guessedLetters={guessedLetters}
            addGuessedLetter={addGuessedLetter}
          />
        </div>
        
        {isGameOver && (
          <div className="button-container">
            <button onClick={startNewGame} className="newgame-button">
              New Game
            </button>
          </div>
        )}
      </section>
    </header>
  );
}
