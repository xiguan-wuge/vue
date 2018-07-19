import React, { Component } from 'react';
import './App.css';

class NodeList extends Component {
  // constructor 要有功能 才要自己建constructor  不然会警告
  // constructor(props) {
  //   super(props)
  //   this.loadData()
  // }
  // loadData(){
  //   console.log('loadData')
  // }
  render (){
    return (
      <ul>
        {this.props.children.map((child,index) => <li key={index}>{child}</li>)}
      </ul>
    )
  }
}
class App extends Component {
  render() {
    
    return (
      <div className="App">
        <NodeList>
          <span>Hello</span>
          <span>World</span>
        </NodeList>
      </div>
    );
  }
}

export default App;
