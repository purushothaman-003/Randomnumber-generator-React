import React, { useState } from 'react';
import './App.css';

function App() {

  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const random = Math.floor(Math.random() * 100) + 1; 
    setRandomNumber(random);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Number Generator</h1>
        <button onClick={generateRandomNumber}>Generate Random Number</button>
        {randomNumber !== null && (
          <p>Your random number is: {randomNumber}</p>
        )}
      </header>
    </div>
  );
}

export default App;
