import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="main-title">My React Project Lab1</h1>
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
        <button className="test-button" onClick={() => alert('버튼이 클릭되었습니다!')}>
          Click Me!
        </button>
        
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