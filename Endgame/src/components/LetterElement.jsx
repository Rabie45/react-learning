
// eslint-disable-next-line react/prop-types
export default function LetterElement({currentWord,guessedLetters}) {


  return (
    // eslint-disable-next-line react/prop-types
    <>{currentWord.split("").map((letter, index) => {
        return (
          <span key={index}>
            {guessedLetters.includes(letter) ? letter.toUpperCase() : "_"}
          </span>
        );
      })}</>
  )
}
