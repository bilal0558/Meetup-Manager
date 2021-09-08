import React from 'react';


import { Route, Switch } from 'react-router-dom';

import NavBar from './components/layout/NavBar';

import AllMeetupsPage from './pages/AllMeetups';
import ImportantPage from './pages/Important';
import NewMeetingPage from './pages/NewMeetups';


function App() {
    return (
        <>
            <NavBar/>
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
        </>
    )
}

export default App