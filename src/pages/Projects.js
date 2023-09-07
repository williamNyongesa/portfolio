import React from 'react'
import ProjectItem from '../components/ProjectItem'
import "../styles/project.css"
import "../helpers/projectList"
import { projectList } from '../helpers/projectList'



function Projects() {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
              {projectList.map((project,id)=>{
                return <ProjectItem name={project.name} image={project.image} id={id}/>
              })}
      </div>
      
    </div>
  )
}

export default Projects