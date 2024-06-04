import { Email, GitHub, LinkedIn } from '@mui/icons-material'
import React from 'react'
import "../styles/Home.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is William</h2>
        <br />
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <Link to="https://www.linkedin.com/in/william-nyongesa-a2a064241/"><LinkedIn /></Link>
          <Link to="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSDXmZzpcmzQqWFBzlgMVGFjJQcMsrNnCtPnmTWHllXlmMWPBFRvQBjjzLFJdBLZhPGfpZlV"><Email/></Link>
          <Link to="https://github.com/williamNyongesa"><GitHub /></Link>
          
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS,JavaScript  NPM,
              Iconic, BootStrap, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
               python, JavaScript
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>

          <li className="item">
            <h2> other</h2>
            <span>
              System Design, git, jira, Docker,playwright, Kubernetes
            </span>
          </li>


        </ol>
      </div>
    </div>
  );
}

export default Home;