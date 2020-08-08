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
                <a href="https://convrge.herokuapp.com" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={first} />
                    </div>
                    <div className="top">
                        <h3 className="title">Converge</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        Converge is a private messaging app built for fun.
                        It's being designed with option to remain private or go a little bit public.
                        It's still under construction.
                </p>
                </a>
                <a href="https://findsellr.netlify.com/businesspage.html" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={second} />
                    </div>
                    <div className="top">
                        <h3 className="title">Findsellr Business Page</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        Findsellr is an app that aims to bring
                        sellers closer to customers.
                        It's still in works.
                    </p>
                </a>
                <a href="https://ricapp.netlify.app" target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={block} />
                    </div>
                    <div className="top">
                        <h3 className="title">RICApp</h3>
                        <div className="liner"></div>
                    </div>
                    <p>
                        RICApp is just a mini project to help students of a particular school keep abreast
                        with school work and their curriculum in the face of the current lockdown due to COVID19 using videos sourced from youtube.
                    </p>
                </a>
                <a target="_blank" rel="noopener noreferrer" className="project">
                    <div className="image">
                        <img src={screen} />
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
                        <img src={screen} />
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