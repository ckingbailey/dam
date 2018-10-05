import React, { Component } from 'react'

class Navbar extends Component {
    render() {
        return (
            <div className="top-bar navbar">
                <div className="top-bar-left">
                    <h5 className="navbar__site-title"><a href="index.html">Dam Assessment Mapping and Safety System</a></h5>
                </div>
                <div className="top-bar-right">
                    <a role="button" onClick={this.props.handleAboutClick}>About</a>
                </div>
            </div>
        );
    }
}

export default Navbar;
