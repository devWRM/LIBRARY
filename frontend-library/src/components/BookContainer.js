import React, { Component } from 'react'


import BookList from './BookList.js';

class BookContainer extends Component {
    // this.props.library

    render() {
        return (
            <div>
                {this.props.library.name} Library's Booklist:
                <BookList booklist={this.props.library.books} />
            </div>
        )
    }
}



export default BookContainer;
