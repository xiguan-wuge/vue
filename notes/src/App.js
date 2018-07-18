import React, { Component } from 'react'
import Notes from './components/Notes'
import 'semantic-ui-css/semantic.min.css'
import './App.css' //style

// .vue 中：template,js,style
// reacte 中：.js,负责输出一个组件类，继承的概念；template?=>jsx 在render里面 操作
class App extends Component {         
  render() {
    return (   
      <Notes />
    ) 
    
  }
}

export default App
