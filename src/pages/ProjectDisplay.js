import { GitHub } from '@mui/icons-material';
import React from 'react'
import { useParams } from 'react-router-dom'
import { projectList } from '../helpers/projectList';
import "../styles/ProjectDisplay.css"
import { Link } from 'react-router-dom'

function ProjectDisplay() {
    const { id } =useParams();
    const project = projectList[id];
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <img src={project.image}/>
        <p>{project.skills}</p>
        <Link to={project.link}><GitHub/></Link>
    </div>
  );
}

export default ProjectDisplay