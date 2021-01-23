export const librariesReducer = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_LIBRARIES':
            return action.payload
        case 'NEW_LIBRARY':
            return [...state, action.payload]
        default:
            return state
    }
}