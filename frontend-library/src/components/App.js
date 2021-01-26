import React from 'react';

import './App.css';
import LibraryContainer from './LibraryContainer.js';




class App extends React.Component {

  render() {
      return (
        <div className="App">

          <header className="App-header">
            <p>
              <h3>Welcome to the Library App</h3>
             <p> LINK LINK LINK LINK</p>
            </p>          
          </header>

          
          <LibraryContainer />

        </div>
      );
  }

}

export default App;
