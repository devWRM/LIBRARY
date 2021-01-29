import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { deleteLibrary } from '../actions/libraryActions.js';
// import Library from './Library.js';
import LibraryForm from './LibraryForm.js';


function LibraryList(props) {

    

    return (
        <div>
  
            <LibraryForm />

            {/* {props.libraries.map(library => <div key={library.id}>
                
                <Library library={library} />
                <button onClick={() => props.deleteLibrary(library.id)}>Delete {library.name}</button>
               
            </div>)} */}


            {props.libraries.length ? props.libraries.map(library => 
                <div key={library.id}
                
                    style = {{
                        border: '2px solid #ccc',
                        padding: '1rem'
                    }}

                >
                    <button className="library-button" onClick={() => props.deleteLibrary(library.id)}>Delete {library.name}</button>
                    <Link to={`/libraries/${library.id}`}>{library.name}</Link>

                    {/* <Library library={library} />  <br></br>   */}
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
