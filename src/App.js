// 1. Always import react
import React from 'react';
// const react = require('react');
import logo from './logo.svg';
import './App.css';
import Greet from './Greet';

// 2. Always define a function (or a class)
function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Greet whom='Alice'/>
    </div>
  );
}

// 3. Always export the App
export default App;
// module.exports = App;