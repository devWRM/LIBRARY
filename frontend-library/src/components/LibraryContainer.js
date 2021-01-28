import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';


import { fetchLibraries } from '../actions/libraryActions.js';
// import LibraryForm from './LibraryForm.js';
import LibraryList from './LibraryList.js';
import Home from './Home.js';
import About from './About.js';
import Library from './Library.js';


class LibraryContainer extends Component {

    componentDidMount() {
        this.props.fetchLibraries()
    }

    render() {

        return (
            <div>
                <div 
                    style = {{
                        // width: '50%',
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                        fontSize: '20px',
                        
                        // border: '2px solid #ccc',
                        padding: '1rem'
                    }}
                >
                    THE LIBRARY LIST:
                    
                </div>
                {/* <LibraryForm /> */}

                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/about' component={About} />
                    <Route exact path='/libraries' component={LibraryList} />
                    <Route path='/libraries/:id' component={Library} />
                </Switch>


                {/* <LibraryList /> */}
            </div>
        )

    }

}

export default connect(null, { fetchLibraries })(LibraryContainer);