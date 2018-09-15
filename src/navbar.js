import React, { Component } from 'react';
import './css/navbar.css';
import scrollToComponent from 'react-scroll-to-component'

class Navbar extends Component {
    render() {
        return (
            <div className="top-bar navbar">
                <div className="top-bar-left">
                    <h5 className="navbar__site-title"><a href="/index.html">Dam</a></h5>
                </div>
                <div className="top-bar-right">
                    <ul className="dropdown menu" data-dropdown-menu>
                        <li><a href="/about.html">About</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
