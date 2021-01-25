
import { combineReducers } from 'redux';

import { librariesReducer } from './librariesReducer.js';
// import { booksReducer } from './booksReducer.js';



export const rootReducer = combineReducers({
    
    libraries: librariesReducer
    // books: booksReducer
})


