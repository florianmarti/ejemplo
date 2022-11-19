import React from 'react';
import './App.css';
import Navbar from './Componentes/Navbar/Navbar';
import ItemListConteiner from './Componentes/ItemListConteiner/ItemListConteiner';
import "boxicons";
import "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar color="red" />
      <ItemListConteiner wellcome='Bienvenidos' />
    </div>
  );
}

export default App;
