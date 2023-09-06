import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../styles/Home.css"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is William</h2>
        <br />
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <LinkedIn />
          <Email />
          <GitHub />
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS,  NPM,
              Iconic, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
               python
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;