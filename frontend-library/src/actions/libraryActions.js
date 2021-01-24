export const fetchLibraries = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/libraries')
        .then(resp => resp.json())
        .then(dataLibraries => dispatch({ type: 'FETCH_LIBRARIES', payload: dataLibraries }))

    }
}


export const newLibrary = libraryInput => {
    return (dispatch) => {
        fetch('http://localhost:3000/libraries', {
            method: 'POST',
            body: JSON.stringify(libraryInput),
            headers: { 'Content-Type': 'application/json'}
        })
        .then(resp => resp.json())
        .then(dataLibrary => dispatch({ type: 'NEW_LIBRARY', payload: dataLibrary }))
    }
}
//         .then(dataLibrary => console.log(dataLibrary))


export const deleteLibrary = libraryID => {
    return (dispatch) => {
        fetch(`http://localhost:3000/libraries/${libraryID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(dataLibrary => dispatch({ type: 'DELETE_LIBRARY', payload: dataLibrary }))
    }
}


export const newBook = (book, libraryID) => {
    return (dispatch) => { 
        fetch(`http://localhost:3000/libraries/${libraryID}/books`, {
            method: 'POST',
            body: JSON.stringify(book),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(resp => resp.json())
        .then(dataLibrary => dispatch({ type: 'NEW_BOOK', payload: dataLibrary}))
    }
}


export const deleteBook = (bookID, libraryID) => {

    return (dispatch) => {
        fetch(`http://localhost:3000/libraries/${libraryID}/books/${bookID}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp => resp.json())
        .then(dataLibrary => dispatch({ type: "DELETE_WORD", payload: dataLibrary }))
    }
}



