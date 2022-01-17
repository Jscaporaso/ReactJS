import React from 'react'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Camiseta Titular"/>
    </div>
  );
}

export default App;
