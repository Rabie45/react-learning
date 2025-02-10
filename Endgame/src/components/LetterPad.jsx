import clsx from 'clsx';
export default function LetterPad({currentWord,isGameOver,guessedLetters,addGuessedLetter}) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

 return( 

  <>
  {alphabet.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    

    return (
      <button
        key={letter}
        disabled={isGameOver}
       className={clsx({ correct: isCorrect, wrong: isWrong })}
        onClick={() => addGuessedLetter(letter)}
        
      >
        {letter.toUpperCase()}
      </button>
    );
  })} 
  </>
  );
}
