import React, { Component } from 'react'

import BookList from './BookList.js';

class BookContainer extends Component {
    render() {
        return (
            <div>
                All your books listed!
                <BookList />
            </div>
        )
    }
}

export default BookContainer
