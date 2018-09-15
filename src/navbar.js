import React, { Component } from 'react'
import './css/navbar.css'

class Navbar extends Component {
    render() {
        return (
            <div className="top-bar navbar">
                <div className="top-bar-left">
                    <h5 className="navbar__site-title"><a href="/index.html">Dam</a></h5>
                </div>
                <div className="top-bar-right">
                </div>
            </div>
        );
    }
}

export default Navbar;
