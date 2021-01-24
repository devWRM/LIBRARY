import React from 'react'
import { connect } from 'react-redux';

import Library from './Library.js';
import { deleteLibrary } from '../actions/libraryActions.js';


function LibraryList(props) {

    

    return (
        <div>
            THE LIBRARY LIST:<br></br>
            click a name to see library details<br></br>
            {props.libraries.map(library => <div key={library.id}>
                
                <Library library={library} />
                <button onClick={() => props.deleteLibrary(library.id)}>Delete {library.name}</button><br></br>
                - - -
                
            </div>)}
            
        </div>
    )
}

const mapStateToProps = state => {
    return { libraries: state.libraries }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteLibrary: id => dispatch(deleteLibrary(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LibraryList)