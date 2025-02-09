import LetterPad from "./LetterPad";
import { useState } from "react";
export default function Main() {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  return (
    <main>
      <div className="alphapet-contanier">
        {alpha.map((letter) => (
          // eslint-disable-next-line react/jsx-key
          <LetterPad key={letter} value={String.fromCharCode(letter)} />
        ))}
      </div>
      <dev className="button-container">
        <button className="newgame-button">New Game</button>
      </dev>
    </main>
  );
}
