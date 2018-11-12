import React from 'react';
import { Switch, Route } from 'react-router-dom'
import NavBar from './NavBar';
import Post from './Post';
import Logs from './Logs';
import Login from './Login';
import Queue from './Queue';

const Dashboard = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Login}/>
            <Route path='/queue' componenet={Queue}/>
            <Route path='/post' component={Post}/>
            <Route path='/logs' component={Logs}/>
        </Switch>
    </main>
);

export default Dashboard;