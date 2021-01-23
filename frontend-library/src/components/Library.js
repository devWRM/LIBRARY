import React from 'react'

const Library = (props) => {
    return (
        <div>
            {props.library.name}<br></br>
            {props.library.street}<br></br>
            {props.library.city}<br></br>
            {props.library.state}<br></br>
        </div>
    )
}

export default Library;
