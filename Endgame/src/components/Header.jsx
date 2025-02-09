import { languages } from "../languages";
import { useState } from "react";
import clsx from "clsx";
import { words } from "./words";
import Confetti from "react-confetti";

export default function Header() {
  const [currentWord, setCurrentWord] = useState(
    words[Math.floor(Math.random() * words.length)]
  );
  console.log(currentWord);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const isGameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  console.log(isGameWon);
  const wrongGussedCounter = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  const isGameLost = wrongGussedCounter >= languages.length - 1;
  console.log(isGameLost);
  const isGameOver = isGameWon || isGameLost;

  function startNewGame() {
    setCurrentWord(words[Math.floor(Math.random() * words.length)]);
    setGuessedLetters([]);
  }
  console.log(wrongGussedCounter);
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const keyBoardElement = alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    const className = clsx({
      correct: isCorrect,
      wrong: isWrong,
    });
    console.log(className);

    return (
      <button
        key={letter}
        disabled={isGameOver}
        className={className}
        onClick={() => addGuessedLetters(letter)}
      >
        {letter.toUpperCase()}
      </button>
    );
  });
  function addGuessedLetters(letter) {
    setGuessedLetters((prevGuess) => {
      return prevGuess.includes(letter) ? prevGuess : [...prevGuess, letter];
    });
  }

  const langElement = languages.map((language, index) => {
    const isLanguageLost = index < wrongGussedCounter;
    const styles = {
      backgroundColor: language.backgroundColor,
      color: language.color,
    };
    const className = clsx("chip", isLanguageLost && "lost");
    return (
      <span className={className} key={language.name} style={styles}>
        {language.name}
      </span>
    );
  });

  const letterElem = currentWord.split("").map((letter, index) => {
    return (
      <span key={index}>
        {guessedLetters.includes(letter) ? letter.toUpperCase() : "_"}
      </span>
    );
  });
  console.log(letterElem);
  const gameStatusClass = clsx("game-status", {
    won: isGameWon,
    lost: isGameLost,
  });
  return (
    <header className="header">
      {isGameWon && <Confetti />}
      <h1>Assembly Endgame</h1>
      <h6>
        Guess the word with 8 attempts to keep the programming world safe from
        Assembly
      </h6>
      <section className={gameStatusClass}>
        {isGameLost && (
          <>
            <h2>You lOST!</h2>
            <p> lOST!</p>{" "}
          </>
        )}
        {isGameWon && (
          <>
            <h2>You win!</h2>
            <p>Well done!</p>
          </>
        )}
      </section>
      <section className="language-chips ">
      {langElement}
      </section>
      <section className="word">{letterElem}</section>
      <section>
        <div className="alphapet-contanier">{keyBoardElement}</div>
        {isGameOver && (
          <div className="button-container">
            <button onClick={() => startNewGame()} className="newgame-button">
              New Game
            </button>
          </div>
        )}
      </section>
    </header>
  );
}
