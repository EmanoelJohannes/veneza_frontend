import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

//Events
import CreateEvent from '../pages/Event/CreateEvent';
import ListEvent from '../pages/Event/ListEvent';

//Speakers
import ListSpeakers from '../pages/Speakers/ListSpeakers';
import CreateSpeaker from '../pages/Speakers/CreateSpeaker';

//Schedules
import ListEvents from '../pages/Schedules/ListEvents';
import ListSchedules from '../pages/Schedules/ListSchedules';


export default function Routes() {
    return (
        <Switch>

            <Route path="/" exact component={SignIn}></Route>
            <Route path="/register" component={SignUp}></Route>

            <Route path="/dashboard" component={Dashboard} isPrivate></Route>
            <Route path="/profile" component={Profile} isPrivate></Route>

            <Route path="/events" component={ListEvent} isPrivate></Route>
            <Route path="/createEvent" component={CreateEvent} isPrivate></Route>

            <Route path="/speakers" component={ListSpeakers} isPrivate></Route>
            <Route path="/createSpeaker" component={CreateSpeaker} isPrivate></Route>

            <Route path="/eventSchedules" component={ListEvents} isPrivate></Route>
            <Route path="/schedules/:event" component={ListSchedules} isPrivate></Route>


            <Route path="/" component={() => <h1>404 not found</h1>} />
        </Switch>
    );
}