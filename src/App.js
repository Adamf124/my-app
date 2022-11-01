import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  function MyButton() {
    const [count, setCount] = useState(0)
    function handleClick(){
      alert("I have been clicked.");
    }
    return (
      <button onClick={handleClick}>
        I'm a button
      </button>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <MyButton />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
