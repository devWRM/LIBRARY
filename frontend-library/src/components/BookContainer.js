import React, { Component } from 'react'


import BookList from './BookList.js';
import BookForm from './BookForm.js';


class BookContainer extends Component {
    // this.props.library

    render() {
        return (
            <div
            
            style = {{
                justifyContent: 'left',
                fontSize: '17px',
                
                // border: '2px solid #ccc',
                padding: '1rem'
            }}
            
            >
                
                <BookForm library={this.props.library} />

                <div style = {{ color: "#229954", padding: '1rem' }}><b>{this.props.library.name} Library's Booklist:</b></div>


                
                <BookList booklist={this.props.library.books} />



            </div>
        )
    }
}



export default BookContainer;
