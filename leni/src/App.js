import React, { useState } from 'react';
import Search from './components/Search.jsx';
import Card from './components/Card.jsx';

import './App.css';

function App() {
  const [name, setName] = useState("");
  const [imagen, setImg] = useState("");
  function enBuscar (nombre){
      fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(r => r.json())
      .then((data) => {
        const poke ={
          name: data.name,
          img: data.sprites.front_default
        }
        setName(() => poke.name);
        setImg(() => poke.img);
      });
  }
  return (
    <div className="App">
      <Search enBuscar={enBuscar}/>
      <Card name={name} img={imagen}/>
    </div>
  );
}

export default App;
