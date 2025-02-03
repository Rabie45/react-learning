import trollFace from "../img/trollface.png";
export default function Header() {
  return (
    <header className='header'>
        <img src={trollFace}/>
        <h1>
            Meme genrator
        </h1>
    </header>
  )
}
