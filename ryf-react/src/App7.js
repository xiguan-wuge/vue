import React, { Component } from 'react';
import './App.css';

// 动态输出样式
// opacity 1 ->0 1秒内

class Hello extends Component{
  state = {
    opacity: 1
  }
  componentDidMount() {
    //注意setState 里this ，所以用箭头函数
    setInterval(()=>{
      let opacity = this.state.opacity;
      opacity -=0.5;
      if (opacity<0.1){
        opacity=1
      }
      this.setState({
        opacity: opacity
      })
    },1000)
  }
  render() {
    
    return (
      <div style={{ opacity: this.state.opacity}}>
        Hello {this.props.name}
      </div>
      
    )
  }
}
class App extends Component {
 
  render() {
   
    return (
      <div className="App">
        <Hello name="world"/>
      </div>
    );
  }
}

export default App;
