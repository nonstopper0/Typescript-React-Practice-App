import React from 'react';
import logo from './logo.svg';
import './App.css';
import { TextField } from './Components/TextField';

function App() {
  return (
    <div className="App">
      <TextField text="Yello" handleChange={e => {
        console.log(e.currentTarget)
      }}/>
    </div>
  );
}

export default App;
