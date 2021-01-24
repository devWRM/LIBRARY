import React from 'react'

import BookContainer from './BookContainer.js';

const Library = (props) => {

    return (
        <div>
            <b>{props.library.name}</b><br></br>
            {props.library.street}<br></br>
            {props.library.city}<br></br>
            {props.library.state}<br></br>

            <BookContainer library={props.library} />
        </div>
    )
}

export default Library;
