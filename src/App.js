import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import Intervalo from './components/intervalo';
import Media from './components/media';
import Soma from './components/soma';
import Sorteio from './components/sorteio';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux</h1>
      <div className="linha">
        <Intervalo ></Intervalo>
      </div>
      <div className="linha">
        <Media ></Media>
        <Soma ></Soma>
        <Sorteio ></Sorteio>
      </div>
    </div>
  );
}

export default App;
