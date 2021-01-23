import React from 'react'
import { connect } from 'react-redux';

import Library from './Library.js';


function LibraryList(props) {

    

    return (
        <div>
            THE LIBRARY LIST:<br></br>
            click a name to see library details<br></br>
            {props.libraries.map(library => <li key={library.id}>
                {library.name}<br></br>
                {library.street}<br></br>
                {library.city}<br></br>
                {library.state}<br></br>
            </li>)}
            
        </div>
    )
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

export default connect(mapStateToProps)(LibraryList)
