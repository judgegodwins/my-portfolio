import React from 'react';
import Picture from "../images/picture.jpg";
import { Link } from 'react-router-dom';

function HomeTab() {

    return (
        <div className="home-tab">
            <div className="about">
                <h1>Hi, I'm Judge</h1>

                <p>
                    I'm a "Backend" Fullstack Developer with an eye for detail
                    and a minimalist also.
                </p>
                <div className="socials home">
                    <div className="social touch-indicator">
                        <a target="_blank" href="https://github.com/judgegodwins"><i className="fab fa-github"></i></a>
                    </div>
                    <div className="social touch-indicator">
                        <a target="_blank" href="https://twitter.com/judgegodwins"><i className="fab fa-twitter"></i></a>
                    </div>
                    <div className="social touch-indicator">
                        <a target="_blank" href="https://ng.linkedin.com/in/judge-godwins-221140113"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <Link className="explore-link" to="/portfolio">
                    <button className="explore">EXPLORE  <i className="fas fa-long-arrow-alt-right"></i></button>
                </Link>
            </div>
            <div className="picture">
                <img src={Picture} />
            </div>
        </div>
    );
}

export default HomeTab;