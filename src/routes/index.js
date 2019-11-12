import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

//Event
import CreateEvent from '../pages/Event/CreateEvent';


export default function Routes() {
    return (
        <Switch>

            <Route path="/" exact component={SignIn}></Route>
            <Route path="/register" component={SignUp}></Route>

            <Route path="/dashboard" component={Dashboard} isPrivate></Route>
            <Route path="/profile" component={Profile} isPrivate></Route>

            <Route path="/createEvent" component={CreateEvent} isPrivate></Route>
            <Route path="/" component={() => <h1>404 not found</h1>} />
        </Switch>
    );
}