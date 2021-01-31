import React from 'react'

const Book = (props) => {

    return (
        <div>
            <b>Title:</b> {props.book.title}<br></br>
            <b>Author:</b> {props.book.author}<br></br>
            <b>Genre:</b> {props.book.genre}<br></br>
            <b>Summary:</b> {props.book.summary}<br></br>
        </div>
    )
}

export default Book
