import { useState, useEffect } from "react";
import React from 'react'


function App() {

  const apiUrl = "https://dog.ceo/api/breeds/image/random"

  const [pictures, setPictures] = useState([]);

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
      <main>
        <div class="menu hidden">
          <ul>
            {pictures.map(picture => (
              <li>{picture.split("/")[4]}</li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
