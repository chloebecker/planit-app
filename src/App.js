import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Post from './components/Post';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <NavBar />
          <Post/>
      </div>
    );
  }


}

export default App;
