import React, { Component } from 'react';
import RadioStation from './radioStation/RadioStation'
import Recommend from './recommend/Recommend';
import Vedio from './vedio/Vedio';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from 'react-router-dom';
// import '@/assets/stylus/reset.styl';
import logo from '@/assets/imgs/logo.png';
import './App.styl';
import MusicPlayer from '@/components/play/MusicPlayer';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="app">
        <header className="app-header">
          <img src={logo} alt="logo" className="app-logo" />
          <h1 className="app-title">酷我 Music</h1>
        </header>
        <div className="music-tab">
          <div className="tab-item selected">
            <NavLink to="/recommend" className="nav-link">
              <span>推荐</span>
            </NavLink>  
          </div>
          <div className="tab-item">
            <NavLink to="/radioStation" className="nav-link">
              <span>主播电台</span>
            </NavLink>
          </div>
          <div className="tab-item">
            <NavLink to="/vedio" className="nav-link">
              <span>视频</span>
            </NavLink>
          </div>
        </div>
        <div className="music-view">
          <Switch>
            <Route path="/recommend" component={Recommend} />
              <Route path="/radioStation" component={RadioStation} />
            <Route path="/vedio" component={Vedio} />
            <Redirect from='/' to='/recommend' />
            <Route component={Recommend} />
          </Switch>
        </div>
        <MusicPlayer />
      </div>
      </Router >
    );
  }
}

export default App;
