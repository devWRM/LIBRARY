import React from 'react'
import { Link } from 'react-router-dom';



function Navbar() {

    const navbarStyle = {
        color: "white"
    }



    return (
        <nav>
            <ul className="navbar-links">
                <li><Link to="/" style={navbarStyle}>Home</Link></li>
                <li><Link to="/about" style={navbarStyle}>About</Link></li>
                <li><Link to="/libraries" style={navbarStyle}>Library List</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
