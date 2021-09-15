import React from 'react';
import logo from './logo.svg';
import Pie from './charts/pie';
import Bar from './charts/bar';
import Line from './charts/line';
import './App.css';

function App() {
  return (
    <div className="App">
      <Pie />
      <Bar />
      <Line />
    </div>
  );
}

export default App;
