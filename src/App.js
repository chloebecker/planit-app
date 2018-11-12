import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Post from './components/Post';
import Login from './components/Login';
import History from './components/History';

import './App.css';

class App extends Component {

    render() {
        return(
            <div>
                <NavBar/>
                {/*<Login/>*/}
                <Post/>
                <History/>
            </div>
        );
    }


}

export default App;

