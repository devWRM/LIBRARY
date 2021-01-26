import React from 'react';

import './App.css';
import LibraryContainer from './LibraryContainer.js';




class App extends React.Component {

  render() {
      return (
        <div className="App">

          <header className="App-header">
            <p>
              App.js file Header
             
            </p>          
          </header>

          
          <LibraryContainer />

        </div>
      );
  }

}

export default App;
