import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <h5 className="top-bar__site-title"><a href="/index.html">Dam</a></h5>
                </div>
                <div className="top-bar-right">
                    <ul class="dropdown menu" data-dropdown-menu>
                        <li><a href="/about.html">About</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Navbar;
