import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";
import NumPad from "./NumPad";
export default function Main() {
  function generateAllNewDice() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      id: nanoid(),
      isHeld: false,
    }));
  }
  function hold(id) {
    console.log(id);
    setNumbersPad((prevHold) =>
      prevHold.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  const [numbersPad, setNumbersPad] = useState(() => generateAllNewDice());
  const numsList = numbersPad.map((num) => (
    <NumPad
      key={num.id}
      value={num.value}
      isHeld={num.isHeld}
      hold={() => hold(num.id)}
    />
  ));
  const buttonRef = useRef(null);
  const gameWon =
  numbersPad.every((num) => num.isHeld) &&
  numbersPad.every((num) => num.value === numbersPad[0].value);
  
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  },[gameWon]);
  function rollClicked() {
    if(!gameWon){
    setNumbersPad((prevValue) =>
      prevValue.map((die) => {
        return die.isHeld
          ? die
          : { ...die, value: Math.ceil(Math.random() * 6) };
      })
    );
  }
  else{
    setNumbersPad(generateAllNewDice())
  }
  }

  return (
    <main>
      {gameWon && <Confetti />}
      <div className="num-container">{numsList}</div>
      <button ref={buttonRef}className="num-container-button" onClick={rollClicked}>
        {gameWon ? "New game" : "Roll"}
      </button>
    </main>
  );
}
