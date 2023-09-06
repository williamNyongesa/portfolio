import React from 'react'
import ProjectItem from '../components/ProjectItem'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import "../styles/project.css"



function Projects() {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
      <ProjectItem name="Online Store" image={pic1}/>
      <ProjectItem name="My Safari Map" image={pic2}/>
      </div>
      
    </div>
  )
}

export default Projects