import React from 'react';
import './Header.css';

function Header(props) {
    return (
        <div className="header">
            <h1>{props.title}</h1>
            <tagline>
                <p>Search and browse hundreds of thousands of movies with just one click.</p>
            </tagline>
        </div>
    )
}

export default Header;