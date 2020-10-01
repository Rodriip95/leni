import React from 'react';
import './App.css';

function App() {
  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(r => r.json())
  .then((data) => {
    console.log(data);
  });
  return (
    <div className="App">
      Leni
    </div>
  );
}

export default App;
