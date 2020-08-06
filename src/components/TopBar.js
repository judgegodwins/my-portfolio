import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {

    return (
        <div className="top-bar">
            <ul className="links">
                <Link to="/portfolio">
                    <li className="link">PORTFOLIO</li>
                </Link>
                <Link to="/contact">
                    <li className="link">CONTACT ME</li>
                </Link>
                <li className="link">RESUME</li>
            </ul>
        </div>
    )
}

export default TopBar;