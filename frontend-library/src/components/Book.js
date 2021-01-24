import React from 'react'

const Book = (props) => {

    return (
        <div>
            {props.book.title}<br></br>
            {props.book.author}<br></br>
            {props.book.genre}<br></br>
            {props.book.summary}<br></br>
        </div>
    )
}

export default Book
