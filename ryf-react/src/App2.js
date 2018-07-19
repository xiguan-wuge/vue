import React, { Component } from 'react';
import './App.css';
// import HelloMessage from './components/HelloMessage'

class HelloMessage extends Component {
  render(){
    return <h1>Hello,{this.props.name}</h1>
  }
}
class App extends Component {
  render() {
    // const names = ['Alice', 'Emily', 'ZK']
    const arr = [
      <li key="1">Hello World</li>,
      <li key="2">Hello China</li>
    ]
    return (
      <div className="App">
        <HelloMessage name="john"/>
        <ul>
          {/* {names.map((name,index) => {
            return (
              <div key={index}>Hello,{name}</div>
            )
          })} */}
          <ul>
            {
              arr
            }
          </ul>

        </ul>
      </div>
    );
  }
}

export default App;
