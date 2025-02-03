import NavBar from "./NavBar";
function Header(){
    return(
    <header className="header">
    <img src={reactLogo} alt="React Logo" width="40px"/>
    <span>Rect Facts</span>
   <NavBar/>
  </header>
  )
  }
  export default Header