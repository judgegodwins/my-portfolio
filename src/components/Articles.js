import React from "react";

const projects = [
  {
    name: "Building A Chess Game With React",
    description:
      "This technical article provides a step-by-step guide on creating a multiplayer chess game with React and WebSockets using Socket.io.",
    link: "https://blog.openreplay.com/building-a-chess-game-with-react/",
    frontendCode: "",
    backendCode: "https://github.com/judgegodwins/chess-server",
    stack: ["OpenReplay Blog"],
  },
  {
    name: "Implementing Infinite Scrolling In React",
    description: "This article describes how to implement the infinite scrolling technique in React apps.",
    link: "https://blog.openreplay.com/implementing-infinite-scrolling-in-react/",
    frontendCode: "",
    backendCode: "",
    stack: ["OpenReplay Blog"],
  },
];

function Articles() {
  return (
    <div className="portfolio-cover">
      <div className="topmost">
        <h2 style={{ marginBottom: "8px" }}>Articles</h2>
        <div
          className="liner"
          style={{ background: "black", marginBottom: "20px" }}
        ></div>
      </div>
      <div className="portfolio-div">
        {projects.map((p) => (
          <a
            // target="_blank"
            // rel="noopener noreferrer"
            className="project"
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* <div className="image">
          <img src={first} alt="Icon" />
        </div> */}

            <div className="top">
              <div>
                <h3 className="title">{p.name}</h3>
                <span className="stack">{p.stack.join(", ")}</span>
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
          </a>
        ))}
      </div>
    </div>
  );
}

export default Articles;
