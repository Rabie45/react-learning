import { useEffect, useRef, useState } from "react";
import NumPad from "./NumPad.jsx";
import Confetti from "react-confetti";

export default function Main() {
  function getRandList() {
    return new Array(10).fill(0).map((_,index) => ({
      value: Math.ceil(Math.random() * 6),
      id: index,
      isHeld: false,
    }));
  }

  const [numPad, setNumpad] = useState(() => getRandList());
  const buttonRef = useRef(null);

  function handleRoll() {
    if (!gameWon) {
      setNumpad((prevNumPad) =>
        prevNumPad.map((pad) =>
          pad.isHeld ? pad : { ...pad, value: Math.ceil(Math.random() * 6) }
        )
      );
    } else {
      setNumpad(getRandList());
    }
  }

  function hold(id) {
    console.log(id);
    setNumpad((prevNumPad) =>
      prevNumPad.map((pad,index) =>
        index === id ? { ...pad, isHeld: !pad.isHeld } : pad
      )
    );
  }
  const gameWon =
    numPad.every((num) => num.isHeld) &&
    numPad.every((num) => num.value === numPad[0].value);
  useEffect(() => {
    if (gameWon) {
      buttonRef.current.focus();
    }
  }, [gameWon]);

  return (
    <main>
      {gameWon && <Confetti />}
      <div className="num-container">
        {numPad.map((pad,index) => (
          <NumPad
            key={index}
            value={pad.value}
            isHeld={pad.isHeld}
            hold={() => hold(index)} // Pass as a function reference
          />
        ))}
      </div>
      <button
        ref={buttonRef}
        onClick={handleRoll}
        className="num-container-button"
      >
        {gameWon ? "New Game" : "Roll"}
      </button>
    </main>
  );
}
