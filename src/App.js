import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import ImportantPage from './pages/Important';
import NewMeetingPage from './pages/NewMeetups';


function App() {
    return (
        <div>
            <Switch>
                <Route path='/' exact>
                    <AllMeetupsPage />
                </Route>

                <Route path='/new-meetup'>
                    <NewMeetingPage />
                </Route>

                <Route path='/important-meetup'>
                    <ImportantPage />
                </Route>
            </Switch>
        </div>
    )
}

export default App