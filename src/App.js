import React from 'react'
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

const mensaje = "Productos en oferta";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name={mensaje} />
    </div>
  );
}

export default App;
