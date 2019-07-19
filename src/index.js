import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Routes from "./routes/routes";

function App() {
  return (
      <div>
        <Routes />
      </div>
  );
}

render(<App />, document.getElementById('root'));
