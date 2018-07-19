import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    value: 'hello'
  }
  handleChange(event) {
    this.setState({
      value: event.target.value
    }) 
  }
  render() {
   const value = this.state.value;
    return (
      <div className="App">
      {/* react 单项绑定 要修改input 需要用到onChange */}
        <input type="text" value={value} onChange={this.handleChange.bind(this)}/>
        <p>{value}</p>
      </div>
    );
  }
}

export default App;
