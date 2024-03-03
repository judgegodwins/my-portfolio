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
                <Link to="/articles">
                    <li className="link">ARTICLES</li>
                </Link>
                <a target="_blank" rel="noopener noreferrer" href="mailto: judgegodwins@gmail.com">
                    <li className="link">CONTACT ME</li>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1iqvkb_bEi7nVUGyV8OmbprQePu5YOAZYUB75jUFwQv0/edit?usp=sharing">
                    <li className="link">RESUME</li>
                </a>
            </ul>
        </div>
    )
}

export default TopBar;