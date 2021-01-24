import React, { Component } from 'react'


import BookList from './BookList.js';
import BookForm from './BookForm.js';


class BookContainer extends Component {
    // this.props.library

    render() {
        return (
            <div>
                
                <BookForm library={this.props.library} />

                {this.props.library.name} Library's Booklist:
                <BookList booklist={this.props.library.books} />
            </div>
        )
    }
}



export default BookContainer;
