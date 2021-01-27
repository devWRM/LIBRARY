import React from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import LibraryContainer from './LibraryContainer.js';




class App extends React.Component {

  render() {
      return (
        <div className="App">

          <header className="App-header">
            <p>
              <h3>LIBRARY APP</h3>
             <Link to="/">Home</Link>	<Link to="/about">About</Link> <Link to="/libraries">List All Libraries</Link>
            </p>          
          </header>

          <div id="main">
          <LibraryContainer />
          </div>

        </div>
      );
  }

}

export default App;
