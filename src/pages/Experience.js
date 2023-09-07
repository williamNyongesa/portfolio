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
        date='2010-2014'
        iconStyle={{background:"#74b844", color: "#fff"}}
        icon={<School/>}     
        >
          <h3 className='vertical-timeline-element-title'>
            my random school in a certain place
          </h3>
          <p>i achieved a ...</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2010-2014'
      iconStyle={{background:"#5cad23", color: "#fff"}}
      icon={<School/>}     
      >
        <h3 className='vertical-timeline-element-title'>
          my random school in a certain place
        </h3>
        <p>i achieved a ...</p>
      </VerticalTimelineElement>

      <VerticalTimelineElement className='vertical-timeline-element--education'
      date='2010-2014'
      iconStyle={{background:"#6ce813", color: "#fff"}}
      icon={<Work/>}     
      >
        <h3 className='vertical-timeline-element-title'>
          my random school in a certain place
        </h3>
        <p>i achieved a ...</p>
    </VerticalTimelineElement>








        </VerticalTimeline>
                    
        
    </div>
  )
}

export default Experience