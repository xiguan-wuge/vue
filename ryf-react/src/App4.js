import React, { Component } from 'react';
//yarn add prop-types
import PropTypes from 'prop-types'
import './App.css';

class MyTitle extends Component {
  render() {
    return (
      <h1>{this.props.title}</h1>
    )

  }
}
MyTitle.propTypes = {
  title:PropTypes.string
}
class App extends Component {
  render() {
    const data = '123'
    return (
      <div className="App">
        <MyTitle title={data} />
      </div>
    );
  }
}

export default App;
