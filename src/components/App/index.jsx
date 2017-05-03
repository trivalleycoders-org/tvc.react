import React, { Component } from 'react';
// import logo from '../../logo.svg';
import Header from '../Header';
import Sidebar from '../Sidebar';
import MainContent from '../MainContent';
import * as mStyle from '../../master-style';
import * as style from './style.js';


class App extends Component {
  render() {
    return (
      <div style={style.wrapper}>
        <Header />
        <div style={style.row}>
          <MainContent />
          <Sidebar />
        </div>
      </div>
    );
  }
}

export default App;
