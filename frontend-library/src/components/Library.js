import React from 'react'
import { connect } from 'react-redux';


// import BookContainer from './BookContainer.js';

const Library = (props) => {
    // ID # of the Library name clicked             =>> props.match.params.id
    // Array of Library objects in the Redux Store  =>> props.libraries
    // ID # of the 1st Library in the Redux Store   =>> props.libraries[0].id


    return (
        <div>
            !!! LIBRARY !!! LIBRARY !!! LIBRARY !!!
            {/* <b>{props.library.name}</b><br></br>
            {props.library.street}<br></br>
            {props.library.city}<br></br>
            {props.library.state}<br></br>

            <BookContainer library={props.library} /> */}
        </div>
    )
}



const mapStateToProps = state => {
    return { libraries: state.libraries }
}


export default connect(mapStateToProps)(Library);
