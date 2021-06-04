import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <header className='header'>
                <nav className='nav-left flex-wrap'>
                    <div> 
                        <a href='/'>
                            <span id='logo'>JOURNEYS. </span>
                        </a>
                        <span id='slogan'>share your travel experiences</span>
                    </div>
                </nav>
                <nav className='nav-right flex-wrap'>
                    <div>
                        <a id='contact' href='/contact'>contact</a>
                    </div>
                    {/*I also added icons can be viewed, see note in CSS file*/}
                    <div>
                        <button className='nav-btn'>
                            <a id='new' href='/new'>new post</a>
                        </button>
                    </div>
                    <div>
                        <button className='nav-btn'>login</button>
                    </div>
                    <div id='mobile-menu'>
                        <img src='../../public/favicon.ico'></img>
                    </div>
                </nav>
        </header>
    )
}

export default Navbar;