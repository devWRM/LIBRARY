import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './Home.js';
import LibraryContainer from './LibraryContainer.js';


const Router = () => {
    return (
        // <div>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/libraries/new' component={LibraryForm} />
                

            </Switch>
        // </div>
    )
}

export default Router
