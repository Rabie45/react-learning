// eslint-disable-next-line react/prop-types
export default function LetterPad({ value, isHeld }) {
  const letterClicked = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };
  
  return <button onClick={letterClicked}>{value}</button>;
}
