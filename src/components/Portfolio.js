import React from 'react';
import block from '../images/block.e8d18b0.png';
import screen from '../images/screen.4f85ea4.png';
import first from '../images/ctr.e069b5d.png';
import second from '../images/lc.5abc476.png'

function Portfolio(props) {

    return (
        <div className="portfolio-cover">
            <div className="topmost">
                <h2 style={{ marginBottom: "8px" }}>Recent Projects</h2>
                <div className="liner" style={{ background: "black", marginBottom: "20px" }}></div>
            </div>
            <div className="portfolio-div">
                <a href="https://anonly.netlify.app" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={first} alt="Icon"/>
                    </div>
                    <div className="top">
                        <h3 className="title">Anonly</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        Anonly is an anonymous messaging app. (Work in progress)
                    </p>
                </a>
                <a href="https://convrge.netlify.app" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={first} alt="Icon"/>
                    </div>
                    <div className="top">
                        <h3 className="title">Converge</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        Converge is a private messaging app built for fun.
                    </p>
                </a>
                <a href="https://coll.netlify.app" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={first} alt="Icon"/>
                    </div>
                    <div className="top">
                        <h3 className="title">Coll</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        Video call app I built for learning and fun.
                    </p>
                </a>
                <a href="https://ricapp.netlify.app" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={block} alt="Icon" />
                    </div>
                    <div className="top">
                        <h3 className="title">RICApp</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        RICApp is just a mini project to help students of a school keep abreast
                        with school work and their curriculum in the face of the current lockdown using videos sourced from youtube.
                    </p>
                </a>
                <a href="https://findsellr.netlify.com/businesspage.html" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={second} alt="Icon"/>
                    </div>
                    <div className="top">
                        <h3 className="title">Findsellr Business Page (Web View)</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        Findsellr is an app that aims to bring
                        sellers closer to customers.
                        It's still in works.
                    </p>
                </a>
                <a target="_blank" href="https://github.com/judgegodwins/musicplayr" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={screen} alt="Icon"/>
                    </div>
                    <div className="top">
                        <h3 className="title">Musicplayr</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        A demo music player built with Javascript.
                        The file maybe needed to be downloaded and ran for it to work.
                        <br />
                        <br />
                        PS: This was my first project
                    </p>
                </a>
                <a href="https://api.customerpay.me" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={screen} alt="Icon"/>
                    </div>
                    <div className="top">
                        <h3 className="title">CustomerPayMe (API)</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        CustomerPayMe is an app that aims to help Business Owners
                        keep records and handle store matters with ease.
                        My Work is featured in CustomerPayMe's API
                    </p>
                </a>
            </div>
        </div>

    );
}

export default Portfolio;