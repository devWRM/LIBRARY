import React from 'react';

import './App.css';
import LibraryContainer from './LibraryContainer.js';




class App extends React.Component {

  render() {
      return (
        <div className="App">

          <header className="App-header">
            <p>
              <h3>LIBRARY APP</h3>
             <p> (Home)	(List All Libraries)</p>
            </p>          
          </header>

          
          <LibraryContainer />

        </div>
      );
  }

}

export default App;
