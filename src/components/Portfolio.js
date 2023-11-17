import React from "react";

const projects = [
  {
    name: "Multiplayer Chess",
    description: "A simple multiplayer chess game.",
    link: "https://chessrepo.netlify.app",
    frontendCode: "",
    backendCode: "https://github.com/judgegodwins/chess-server",
    stack: ["Go", "React", "Redis", "WebSocket"],
  },
  {
    name: "School Management Dashboard",
    description: "A school management platform.",
    link: "https://admin-mgt.vercel.app",
    frontendCode: "",
    backendCode: "",
    stack: ["Typescript", "NextJS", "NodeJS", "PostgreSQL"],
  },
  {
    name: "Anonly",
    description: "Anonly is an anonymous messaging app.",
    link: "https://anonly.netlify.app",
    backendCode: "https://github.com/judgegodwins?tab=repositories&q=anonly",
    stack: ["Typescript", "React", "NodeJS"],
  },
  {
    name: "Coll",
    description: "A simple video call app I built for learning and fun.",
    link: "https://coll.netlify.app",
    frontendCode: "",
    backendCode: "https://github.com/judgegodwins?tab=repositories&q=coll",
    stack: ["React", "NodeJS"],
  },
  {
    name: "Musicplayr",
    description: "A simple music player app built with Javascript",
    link: "",
    frontendCode: "",
    backendCode: "https://github.com/judgegodwins/Musicplayr",
    stack: ["Javascript"],
  },
];

function Portfolio(props) {
  return (
    <div className="portfolio-cover">
      <div className="topmost">
        <h2 style={{ marginBottom: "8px" }}>Recent Projects</h2>
        <div
          className="liner"
          style={{ background: "black", marginBottom: "20px" }}
        ></div>
      </div>
      <div className="portfolio-div">
        {projects.map((p) => (
          <div
            // target="_blank"
            // rel="noopener noreferrer"
            className="project"
          >
            {/* <div className="image">
          <img src={first} alt="Icon" />
        </div> */}
            <div className="top">
              <div>
                <h3 className="title">{p.name}</h3>
                <span className="stack">{p.stack.join(", ")}</span>
              </div>

              <div
                className="project-action-cover"
                style={{ display: "flex", gap: 12, flexWrap: "nowrap" }}
              >
                {p.link && (
                  <small>
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action"
                    >
                      <i class="fas fa-eye" style={{ marginRight: 2 }}></i>
                      <span>Live</span>
                    </a>
                  </small>
                )}
                {p.backendCode && (
                  <small>
                    <a
                      href={p.backendCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-action"
                    >
                      <i
                        class="fas fa-code-branch"
                        style={{ marginRight: 2 }}
                      ></i>
                      <span>Code</span>
                    </a>
                  </small>
                )}
              </div>
              {/* <div className="liner"></div> */}
            </div>
            <div
              style={{
                marginTop: "2rem",
                marginBottom: "2rem",
                backgroundColor: "#3D3D3D",
                height: 1,
                width: "100%",
              }}
            />
            <div style={{ width: "100%" }}>
              <p style={{ textAlign: "left", margin: 0 }}>{p.description}</p>
            </div>
          </div>
        ))}

        {/* <a
          href="https://chessrepo.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="image">
            <img src={first} alt="Icon" />
          </div>
          <div className="top">
            <h3 className="title">Multiplayer Chess</h3>
            <div className="liner"></div>
          </div>
          <p>A simple multiplayer chess game.</p>
        </a>
        <a
          href="https://admin-ges.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="image">
            <img src={first} alt="Icon" />
          </div>
          <div className="top">
            <h3 className="title">Student MGT Dashboard</h3>
            <div className="liner"></div>
          </div>
          <p>A student management platform for a University Department</p>
        </a>
        <a
          href="https://coll.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="image">
            <img src={first} alt="Icon" />
          </div>
          <div className="top">
            <h3 className="title">Coll</h3>
            <div className="liner"></div>
          </div>
          <p>Video call app I built for learning and fun.</p>
        </a>
        <a
          href="https://convrge.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="image">
            <img src={first} alt="Icon" />
          </div>
          <div className="top">
            <h3 className="title">Converge</h3>
            <div className="liner"></div>
          </div>
          <p>Converge is a private messaging app built for fun.</p>
        </a>
        <a
          href="https://ricapp.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="image">
            <img src={block} alt="Icon" />
          </div>
          <div className="top">
            <h3 className="title">RICApp</h3>
            <div className="liner"></div>
          </div>
          <p>
            RICApp is just a mini project to help students of a school keep
            abreast with school work and their curriculum in the face of the
            current lockdown using videos sourced from youtube.
          </p>
        </a>
        <a
          href="https://findsellr.netlify.com/businesspage.html"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="image">
            <img src={second} alt="Icon" />
          </div>
          <div className="top">
            <h3 className="title">Findsellr Business Page (Web View)</h3>
            <div className="liner"></div>
          </div>
          <p>
            Findsellr is an app that aims to bring sellers closer to customers.
            It's still in works.
          </p>
        </a>
        <a
          target="_blank"
          href="https://github.com/judgegodwins/musicplayr"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="image">
            <img src={screen} alt="Icon" />
          </div>
          <div className="top">
            <h3 className="title">Musicplayr</h3>
            <div className="liner"></div>
          </div>
          <p>
            A demo music player built with Javascript. The file maybe needed to
            be downloaded and ran for it to work.
            <br />
            <br />
            PS: This was my first project
          </p>
        </a>
        <a
          href="https://api.customerpay.me"
          target="_blank"
          rel="noopener noreferrer"
          className="project"
        >
          <div className="image">
            <img src={screen} alt="Icon" />
          </div>
          <div className="top">
            <h3 className="title">CustomerPayMe (API)</h3>
            <div className="liner"></div>
          </div>
          <p>
            CustomerPayMe is an app that aims to help Business Owners keep
            records and handle store matters with ease. My Work is featured in
            CustomerPayMe's API
          </p>
        </a> */}
      </div>
    </div>
  );
}

export default Portfolio;
