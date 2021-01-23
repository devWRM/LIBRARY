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





