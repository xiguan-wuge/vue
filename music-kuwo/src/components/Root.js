import React, { Component } from 'react';
// yaan add react-redux
// import { Provider } from 'react-redux';
// import store from '../redux/store';
import App from './App';

class Root extends Component {
  render () {
    return (
      // <Provider>
        <App />
      // </Provider>
    )
  }
}
export default Root