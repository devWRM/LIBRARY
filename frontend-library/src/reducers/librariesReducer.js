export const librariesReducer = (state = [], action) => {

    switch(action.type) {
        case 'FETCH_LIBRARIES':
            return action.payload
        case 'NEW_LIBRARY':
            return [...state, action.payload]
        case 'DELETE_LIBRARY':
            let newLibraries = state.filter(library => library.id !== action.payload.id)
            return newLibraries
        case 'NEW_BOOK':
            let librariesNewBook = state.map(library => {
                if (library.id === action.payload.id) {
                    return action.payload
                } else {
                    return library
                }
            })
            return librariesNewBook
        case 'DELETE_BOOK':
            let librariesDeleteBook = state.map(library => {

                if (library.id === action.payload.id) {

                    return action.payload
                } else {

                    return library
                }
            })
            return librariesDeleteBook         
        default:
            return state
    }
}




// let librariesDeleteBook = state.map(library => {
//     if (library.id === action.payload.id) {
//         return action.payload
//     } else {
//         return library
//     }
// })
// return librariesDeleteBook    




// let librariesArray = state.map(library => 
//     if (library.id === action.payload.id) {
//         return action.payload
//     } else {
//         return library
//     }
// })