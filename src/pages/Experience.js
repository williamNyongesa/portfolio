import { School, Work } from '@mui/icons-material'
import { colors } from '@mui/material'
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#59c953'>
        <VerticalTimelineElement className='vertical-timeline-element--education'
        date='2018-2023'
        iconStyle={{background:"#74b844", color: "#fff"}}
        icon={<School/>}     
        >
          <h3 className='vertical-timeline-element-title'>
          I was enrolled at Machakos University.
          </h3>
          <p> I was working towards a Bachelor of Science in Information Technology (BSc IT).</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2023'
      iconStyle={{background:"#5cad23", color: "#fff"}}
      icon={<School/>}     
      >
        <h3 className='vertical-timeline-element-title'>
        I was a student at Moringa School, where I was actively engaged in pursuing a comprehensive education in the field of software engineering.
        </h3>
        <p> I successfully attained a certificate that bears testament to my accomplishment and proficiency in a specific area or discipline.</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2024'
      iconStyle={{background:"#6ce813", color: "#fff"}}
      icon={<Work/>}     
      >
        <h3 className='vertical-timeline-element-title'>
        The commencement of my professional journey in the workforce marked a significant turning point in my life. It was the moment when I embarked on the path of building my career, embracing new challenges. 
        </h3>
        <p>I started gaining valuable experiences in the professional world.</p>
    </VerticalTimelineElement>








        </VerticalTimeline>
                    
        
    </div>
  )
}

export default Experience