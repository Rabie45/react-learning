import { useEffect, useRef, useState } from "react";
import { nanoid } from "nanoid";
import NumPad from "./NumPad.jsx";
import Confetti from "react-confetti";

export default function Main() {
  function getRandList() {
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      id: nanoid(),
      isHeld: false,
    }));
  }

  const [numPad, setNumpad] = useState(() => getRandList());
  const buttonRef = useRef(null);
  const numPadList = numPad.map((pad) => (
    <NumPad
      key={pad.id}
      value={pad.value}
      isHeld={pad.isHeld}
      hold={() => hold(pad.id)} // Pass as a function reference
    />
  ));

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
      prevNumPad.map((pad) =>
        pad.id === id ? { ...pad, isHeld: !pad.isHeld } : pad
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
      <div className="num-container">{numPadList}</div>
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
