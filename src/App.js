import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
 

function MyButton({ count, onClick }) {
    
    return (
      <button onClick={onClick}>
        I'm a button that was clicked {count} times
      </button>
    );
  }

function App() {
const [count, setCount] = useState(0)
    function handleClick(){
      setCount(count + 1)
    }
 

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
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


//End of Quick start guide 

