import React from 'react';
import { connect } from 'react-redux';

import Book from './Book.js';
import { deleteBook } from '../actions/libraryActions.js';


const BookList = (props) => {

    // NOTE Need handleDelete to access props ??
    let handleDelete = (book) => {
        props.deleteBook(book.id, book.library_id)
    }


    return (
        <div>
            
            {/* {props.booklist && props.booklist.map(book => 
                <li key={book.id}>
                    
                    <Book book={book} />
                    <button onClick={() => handleDelete(book)}>Delete {book.title}</button>
                </li>              
            )}  */}


            {props.booklist.length ? props.booklist.map(book => 
                <li key={book.id}>  

                    <Book book={book} />
                    {/* {book.title}<br></br>
                    {book.author}<br></br>
                    {book.genre}<br></br>
                    {book.summary}<br></br> */}

                    <button onClick={() => handleDelete(book)}>Delete {book.title}</button>

                </li>) : <h4>There are no books in this library</h4>
            }
          
        </div>
    )
}


// let mapDispatchToProps = dispatch => {
//     return ({
//         deleteBook: (bookID, libraryID) => deleteBook(bookID, libraryID)
//     })
// }


export default connect(null, { deleteBook })(BookList)
