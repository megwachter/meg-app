import logo from './logo.svg';
import './App.css';
import Button from './Button.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Meg App
        </a>
        <br></br>
        <Button />
        <Button />
        <br></br>
        <Button />
        <Button />
      </header>
     
    </div>
  );
}

export default App;
