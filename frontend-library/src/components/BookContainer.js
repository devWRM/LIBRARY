import React, { Component } from 'react'


import BookList from './BookList.js';

class BookContainer extends Component {
    // this.props.library
debugger;
    render() {
        return (
            <div>
                All your books listed!
                <BookList booklist={this.props.library.books} />
            </div>
        )
    }
}



export default BookContainer;
