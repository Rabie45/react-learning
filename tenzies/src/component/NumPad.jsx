/* eslint-disable react/prop-types */

export default function NumPad({ hold, id, isHeld, value }) {
  const styles = {
    backgroundColor: isHeld ? "#59E391" : "white",
  };
  return (
    <button style={styles} className="num-button" onClick={() => hold(id)}>
      {value}
    </button>
  );
}
