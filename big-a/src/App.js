import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the Big A Dashboard v0.1 
        </p>
        <a
          className="App-link"
          href="https://github.com/users/joshhklee/projects/1"
          target="_blank"
          rel="noopener noreferrer"
        >
          
          Big A Project Board
        </a>
      </header>
    </div>
  );
}

export default App;
