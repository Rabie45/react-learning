/* eslint-disable react/prop-types */

export default function NumPad(props) {
  const styles={
      backgroundColor: props.isHeld ? "#59E391" : "white",
  }
return (
<button style={styles} className="num-button" onClick={()=>props.hold(props.id)}>
  {props.value}
 </button>
)
}
