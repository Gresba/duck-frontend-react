import { useState, useEffect } from "react";
import MenuItem from "./components/MenuItems.jsx"

function App() {

  const apiUrl = "https://dog.ceo/api/breeds/image/random"

  const [pictures, setPictures ] = useState([]);
  const [imageUrl, setImageUrl ] = useState("");

  const toggleMenuIcon = () => {
    document.querySelector(".menu-icon").classList.toggle("hidden")
    document.querySelector(".exit-icon").classList.toggle("hidden")
    document.querySelector(".menu").classList.toggle("hidden")
  }

  useEffect(() => {
    for (let i = 0; i < 10; i++) {
      fetch(apiUrl)
        .then(res => res.json())
        .then(res => {
          setPictures(prev => ([
            ...prev,
            res.message
        ]));
      })
    }
  }, [])

  return (
    <div>
      <header>
        <h1>
          Dog Menu
        </h1>
        <div class="menu-icon" onClick={toggleMenuIcon}>
          <i class="fa fa-bars"></i>
        </div>
        <div class="exit-icon hidden" onClick={toggleMenuIcon}>
          <i class="fa fa-times"></i>
        </div>
      </header>
        <div class="image-div">
            <div class="container">
                <h3>Dog Picture!</h3>
                <img src={imageUrl}/>
            </div>
        </div>
      <main>
        <div class="menu hidden">
            <MenuItem setImageUrl={setImageUrl} pictures={pictures}/>
        </div>
      </main>
    </div>
  );
}

export default App;
