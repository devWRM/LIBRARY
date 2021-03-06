import React from 'react'
import { connect } from 'react-redux';


import BookContainer from './BookContainer.js';

const Library = (props) => {
    // ID # of the Library name clicked             =>> props.match.params.id   ("7")
    // Array of Library objects in the Redux Store  =>> props.libraries
    // ID # of the 1st Library in the Redux Store   =>> props.libraries[0].id   (7)
    // NOTE Comparing a string "7" to an integer 7 so use == (NOT ===)

        let libby = props.libraries.find(library =>                
            library.id == props.match.params.id
        )

    return (
        <div>
            {/* <b>{props.library.name}</b><br></br>
            {props.library.street}<br></br>
            {props.library.city}<br></br>
            {props.library.state}<br></br>

            <BookContainer library={props.library} /> */}

             
            <div
            
            style = {{
                justifyContent: 'left',
                fontSize: '20px',
                
                // border: '2px solid #ccc',
                padding: '1rem'
            }}
            
            >
                <b>{libby.name}</b><br></br>
                Street: {libby.street}<br></br>
                City: {libby.city}<br></br>
                State: {libby.state}
            </div>

            <BookContainer library={libby} />
            {/* <BookContainer library={props.library} /> */}


            

        </div>
    )
}



const mapStateToProps = state => {
    return { libraries: state.libraries }
}


export default connect(mapStateToProps)(Library);
