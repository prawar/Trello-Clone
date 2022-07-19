import { Close, Public } from '@mui/icons-material'
import React from 'react'
import './Headbar.css'

const Headbar = () => {
  return (
    <div className='Headbar'>
      <div>
        <Public style={{
          color: 'green',
          height: '16px',
          width: '16px',
          paddingRight: '10px'
        }} />
        <span className='Headbar-message'>This board is set to public. Board admins can change its visibility setting at any time.</span>
        <a href='#' className='Header-Link'>Learn more here</a>
      </div>
      <Close sx={{
        cursor: 'pointer',
        '&hover':{
          backgroundColor: '#091e42'
        },
        marginLeft: '100px' 
      }} />
      
    </div>
  )
}

export default Headbar