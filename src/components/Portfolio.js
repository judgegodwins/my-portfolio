import React from 'react';
import block from '../images/block.e8d18b0.png';
import screen from '../images/screen.4f85ea4.png';
import first from '../images/ctr.e069b5d.png';
import second from '../images/lc.5abc476.png'

function Portfolio() {

    return (
        <div className="portfolio-cover">
            <div className="topmost">
                <h2 style={{ marginBottom: "8px" }}>Recent Projects</h2>
                <div className="liner" style={{ background: "black", marginBottom: "20px" }}></div>
            </div>
            <div className="portfolio-div">
                <a href="https://convrge.herokuapp.com" className="project">
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
                <a href="https://findsellr.netlify.com/businesspage.html" className="project">
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
                    </p>
                </a>
                <a className="project">
                    <div className="image">
                        <img src={block} />
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
                <a className="project">
                    <div className="image">
                        <img src={screen} />
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
            </div>
        </div>

    );
}

export default Portfolio;