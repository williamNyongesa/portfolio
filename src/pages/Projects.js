import React from 'react'
import ProjectItem from '../components/ProjectItem'
import pic1 from "../assets/pic1.jpg"
import pic2 from "../assets/pic2.jpg"
import "../styles/project.css"
import "../helpers/projectList"
import { projectList } from '../helpers/projectList'



function Projects() {
  return (
    <div className='projects'>
      <h1>My personal projects</h1>
      <div className='projectList'>
              {projectList.map((project)=>{
                return <projectList name={}/>
              })}
      </div>
      
    </div>
  )
}

export default Projects