import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';


import { fetchLibraries } from '../actions/libraryActions.js';
// import LibraryForm from './LibraryForm.js';
import LibraryList from './LibraryList.js';
import Home from './Home.js';
import About from './About.js';


class LibraryContainer extends Component {

    componentDidMount() {
        this.props.fetchLibraries()
    }

    render() {

        return (
            <div>
                LIBRARY CONTAINER
                {/* <LibraryForm /> */}

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <div>
                    <Route exact path='/libraries' component={LibraryList} />
                    </div>
                </Switch>


                {/* <LibraryList /> */}
            </div>
        )

    }

}

export default connect(null, { fetchLibraries })(LibraryContainer);