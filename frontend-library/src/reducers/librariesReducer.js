export const librariesReducer = (state = [], action) => {

    switch(action.type) {
        case 'FETCH_LIBRARIES':
            return action.payload
        case 'NEW_LIBRARY':
            return [...state, action.payload]
        case 'DELETE_LIBRARY':
            let newLibraries = state.filter(library => library.id !== action.payload.id)
            return newLibraries
        default:
            return state
    }
}







// let librariesArray = state.map(library => 
//     if (library.id === action.payload.id) {
//         return action.payload
//     } else {
//         return library
//     }
// })