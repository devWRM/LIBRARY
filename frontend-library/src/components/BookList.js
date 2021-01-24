import React from 'react'

const BookList = (props) => {

    return (
        <div>

            {props.booklist.map(book => 
                <div key={book.id}>
                    {book.title}<br></br>
                    {book.author}<br></br>
                    {book.genre}<br></br>
                    {book.summary}<br></br>

                </div>
                
            )}

            
        </div>
    )
}

export default BookList
