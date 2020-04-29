import React from 'react';
import './App.css';
import Todo from './Composant/Todo'

function App() {

  return (
    <div className="App">
      <div className='container-fluid bg-light h3 border p-3' id="title">-\\\- MATOUDOU. -/ / /-</div>
      <div className='container'>
        <Todo />
      </div>
    </div>
  );
}

export default App;
