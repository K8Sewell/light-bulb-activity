import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      light: false
    }
  }

  handleClick = () => {
    this.setState({light: !this.state.light ? true : false})
  }

  render() {
    return (
      <div id="wrapper">
        <div>
          <h1>Light Bulb Activity</h1>
          <br />
          <p>React State Example</p>
        </div>
        <div>
          <div id="light-box" onClick = {this.handleClick}>
          <p>{!this.state.light ? "OFF" : "ON"}</p>
          </div>
          <button onClick = {this.handleClick}>Switch</button>
        </div>
      </div>
    );
  }
}

export default App;
