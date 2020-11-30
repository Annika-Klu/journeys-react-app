import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <header className="header">
            <div className="header-wrapper">
                <nav className="nav-left">
                    <div> 
                        <a href='/'>
                            <span id="logo">JOURNEYS. </span>
                        </a>
                        share your travel experiences
                    </div>
                </nav>
                <nav className="nav-right">
                    <div><a id="contact" href="/contact">contact</a></div>
                    <div><button>new post</button></div>
                    <div><button>login</button></div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;