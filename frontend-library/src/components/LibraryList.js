import React from 'react'
import { connect } from 'react-redux';

import { deleteLibrary } from '../actions/libraryActions.js';
import Library from './Library.js';
import LibraryForm from './LibraryForm.js';


function LibraryList(props) {

    

    return (
        <div>
            {/* THE LIBRARY LIST:<br></br>
            ▸ Fill in the form and submit to add a library to the list.<br></br>
            ▸ Click a library name to see library details.<br></br> */}

            <LibraryForm />

            {/* {props.libraries.map(library => <div key={library.id}>
                
                <Library library={library} />
                <button onClick={() => props.deleteLibrary(library.id)}>Delete {library.name}</button><br></br>
                - - -
                
            </div>)} */}


            {props.libraries.length ? props.libraries.map(library => 
                <div key={library.id}
                
                    style = {{
                        // width:'90%',
                        // maxWidth: '40rem',
                        // margin: '2rem auto',
                        border: '2px solid #ccc',
                        padding: '1rem'
                    }}

                >
                    <button onClick={() => props.deleteLibrary(library.id)}>Delete {library.name}</button>
                    <Library library={library} />  <br></br>  
                </div>) : <h3> Start by creating a library</h3>
            }



            
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
