import { KeyboardDoubleArrowRight, PeopleAlt } from '@mui/icons-material'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <button className='sidebar-btn-wrapper sidebar-btn-special'>
        <PeopleAlt sx={{
          color: 'blue',
          width: '20px',
          height: '20px',
          paddingRight: '8px'
          }}/>
      </button>
      <button className='sidebar-btn-wrapper'>
        <KeyboardDoubleArrowRight sx={{
          width: '20px',
          height: '20px',
          paddingRight: '8px'
        }} />
      </button>
    </div>
  )
}

export default Sidebar