import { useEffect } from "react";
import { useState } from "react";

export default function Main() {
  const [meme, setMeme] = useState({
    topText: "One doesnot simply",
    bottomText: " Walk into Mordor",
    imgUrl: "http://i.imgflip.com/1bij.jpg",
  });
  function handleGetMeme(event) {
    const { value, name } = event.currentTarget;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  const [allMeme, setAllmemes] = useState([]);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllmemes(data.data.memes));
  },[]);
function getAllMemes(){
    const rand = Math.floor(Math.random() *allMeme.length);
    const newUrl= allMeme[rand].url;
    setMeme(prevUrl=>({
        ...prevUrl,
        imgUrl:newUrl,
    }));

}
  return (
    <main>
      <div className="form">
        <div className="main-contnier">
          <label>
            Top Text
            <input type="text" name="topText" onChange={handleGetMeme} />
          </label>

          <label>
            Buttom Text
            <input type="text" name="bottomText" onChange={handleGetMeme} />
          </label>

          <button onClick={getAllMemes}>Get me a meme image</button>
        </div>
      </div>
      <div className="meme">
        <img src={meme.imgUrl} />
        <span className="top">{meme.topText}</span>
        <span className="bottom">{meme.bottomText}</span>
      </div>
    </main>
  );
}
