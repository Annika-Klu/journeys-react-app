import React from 'react';
// import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <header className='header'>
            <div className='header-wrapper'>
                <nav className='nav-left'>
                    <div> 
                        <a href='/'>
                            <span id='logo'>JOURNEYS. </span>
                        </a>
                        <span id='slogan'>share your travel experiences</span>
                    </div>
                </nav>
                <nav className='nav-right'>
                    <div>
                        <a id='contact' href='/contact'>contact</a>
                    </div>
                    {/*I also added icons can be viewed, see note in CSS file*/}
                    <div>
                        <button id='new-post-btn'>
                            <a id='new' href='/new'>new post</a>
                        </button>
                    </div>
                    <div>
                        <button id='login-btn'>login</button>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Navbar;