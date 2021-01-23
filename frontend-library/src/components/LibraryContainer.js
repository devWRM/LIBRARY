import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchLibraries } from '../actions/libraryActions.js';

class LibraryContainer extends Component {

    render() {

        return (
            <div>
                LIBRARY CONTAINER
            </div>
        )

    }

}

export default connect(null, { fetchLibraries })(LibraryContainer);