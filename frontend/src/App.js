// import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [apiStatus, setApiStatus ] = useState('Loading...');

  useEffect(() => {
    // Call the healthcheck API for the backend
    fetch('http://localhost:8080/api/health')
      .then(response => response.json())
      .then(data => {
        setApiStatus(`API Status: ${data.status} - ${data.message}`);
      })
      .catch(error => {
        setApiStatus(`Error connecting to API: ${error.message}`);
      });
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My-Link-Box!</h1>
        <p>Bookmarks management App</p>
        <div>{apiStatus}</div>
      </header>
    </div>
  );
}

export default App;
