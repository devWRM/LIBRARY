import React from 'react'


import Book from './Book.js';



const BookList = (props) => {

    return (
        <div>
            
            {/* {props.booklist && props.booklist.map(book => 
                <div key={book.id}>
                    
                    <Book book={book} />

                </div>              
            )} */}




            {props.booklist.length ? props.booklist.map(book => 
                <li key={book.id}>  
                    <Book book={book} />  
                </li>) : <h4>There are no books in this library</h4>
            }

            
        </div>
    )
}

export default BookList
