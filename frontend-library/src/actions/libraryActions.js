export const fetchLibraries = () => {

    return (dispatch) => {
        fetch('http://localhost:3000/libraries')
        .then(resp => resp.json())
        .then(dataLibraries => dispatch({ type: 'FETCH_LIBRARIES', payload: dataLibraries }))

    }
}


