import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import React, { useState } from 'react';
import yaml from 'js-yaml';

function App() {
  const [yamlContent, setYamlContent] = useState('');
  const [yamlError, setYamlError] = useState('');

  const validateYAML = (e) => {
    const input = e.target.value;
    setYamlContent(input);
  
    try {
      yaml.load(input);
      setYamlError('');
    } catch (err) {
      setYamlError(`Invalid YAML format: ${err.message}`);
    }
  }

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

        <textarea
          placeholder="webservers:
          &#10;hosts:
          &#10;&#10;foo.example.com:
          &#10;&#10;bar.example.com:"
          value={yamlContent}
          onChange={validateYAML}
          className="App-textarea"
        />
        {yamlError && <div className="App-error">{yamlError}</div>}
      </header>
    </div>
  );
}

export default App;
