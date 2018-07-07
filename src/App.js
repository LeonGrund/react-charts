import React, { Component } from 'react';
import logo from './logo.svg';
import teamData from './components/global/dataStubs/TeamData';
import tauCharts from 'taucharts';
import './App.css';


let chart = new tauCharts.Chart({
            data: teamData,
            type: 'horizontalBar',
            x: 'effort',
            y: 'team',
            color:'priority'
        });
chart.renderTo('#bar');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Charts</h1>
        </header>
        <p className="App-intro">
        </p>

      </div>
    );
  }
}

export default App;
