import React from 'react';

function Navbar () {
    return (
        <header className="header">
            <div className="header-wrapper">
                <nav className="nav-left">
                    <div id="logo" >JOURNEYS.</div>
                    <div>share your travel experiences</div>
                </nav>
                <nav className="nav-right">
                    <div><a id="contact" href="/test">contact</a></div>
                    <div><button>new post</button></div>
                    <div><button>login</button></div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;