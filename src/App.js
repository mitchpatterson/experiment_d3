import React, { Component } from 'react';
import Chart from "./components/chart";
import ReactLogo from "./media/react_logo.svg";
import HeartIcon from "./media/like.svg";
import D3Logo from "./media/d3_logo.svg";
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      render: false
    };
  }

  header() {
    return (
      <header className="App-header">
          <div className="logos">
            <img src={ReactLogo} alt="React logo" style={{width: "100px"}} />
            <img src={HeartIcon} className="heart_icon" alt="heart icon" style={{width: "20px", height: "20px"}} />
            <img src={D3Logo} alt="D3 logo" style={{width: "65px", height: "65px", marginLeft: "20px"}} />
          </div>
          <p>
            D3.js Charting Experiments
          </p>
          <button onClick={() => this.setState({render: true})}>Let's go!</button>
      </header>
    );
  }

  render() {
    return (
      <div className="App">
        {this.state.render ? <Chart /> : this.header()}
      </div>
    );
  }
}

export default App;
