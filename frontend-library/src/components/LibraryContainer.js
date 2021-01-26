import React, { Component } from 'react';
import { connect } from 'react-redux';


import { fetchLibraries } from '../actions/libraryActions.js';
// import LibraryForm from './LibraryForm.js';
import LibraryList from './LibraryList.js';

class LibraryContainer extends Component {

    componentDidMount() {
        this.props.fetchLibraries()
    }

    render() {

        return (
            <div>
                LIBRARY CONTAINER
                {/* <LibraryForm /> */}
                <LibraryList />
            </div>
        )

    }

}

export default connect(null, { fetchLibraries })(LibraryContainer);