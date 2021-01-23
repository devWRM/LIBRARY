import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchLibraries } from '../actions/libraryActions.js';
import LibraryForm from './LibraryForm.js';

class LibraryContainer extends Component {

    componentDidMount() {
        this.props.fetchLibraries()
    }

    render() {

        return (
            <div>
                LIBRARY CONTAINER
                <LibraryForm />
            </div>
        )

    }

}

export default connect(null, { fetchLibraries })(LibraryContainer);