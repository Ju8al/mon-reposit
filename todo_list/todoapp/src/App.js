import React from 'react';
import './App.css';

import Header from "./components/Header";
import Element from "./components/Element";
import Liste from "./components/Liste";

function App() {

  return (
    <div className="container-fluid">
      <div className="App">
        <Header />
        <Element />
        <Liste />
      </div>
    </div>

  );
}

export default App;
