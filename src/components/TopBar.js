import React from 'react';
import { Link } from 'react-router-dom';

function TopBar() {

    return (
        <div className="top-bar">
            <ul className="links">
                <Link to="/">
                    <li className="link">HOME</li>
                </Link>
                <Link to="/projects">
                    <li className="link">PROJECTS</li>
                </Link>
                <Link to="/contact">
                    <li className="link">CONTACT ME</li>
                </Link>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1_w65zw-qnRA3ZCat1BRNnb-DXVD71CeoxLcFAR70Nz0/edit?usp=sharing">
                    <li className="link">RESUME</li>
                </a>
            </ul>
        </div>
    )
}

export default TopBar;