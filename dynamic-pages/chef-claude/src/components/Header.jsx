import chiefLogo from "../../img/chief.png";
export default function Header() {
  return (
    <header className="header">
        <img src={chiefLogo}/>
      <h1>Chef Claude</h1>
    </header>
  );
}
