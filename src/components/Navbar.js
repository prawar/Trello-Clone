import React from 'react'
import AppsIcon from '@mui/icons-material/Apps';
import './Navbar.css'
import { InfoOutlined, KeyboardArrowDown, NotificationsNoneOutlined, Search } from '@mui/icons-material';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <div className='nav-left'>
        <div className='left-item app-icon'><AppsIcon /></div>
        <div className='left-item'>
          <p className='logo'></p>
        </div>
        <div className='left-item'>
          <span>Workspaces</span>
          <KeyboardArrowDown />
        </div>
        <div className='left-item'>
          <span>Recent</span>
          <KeyboardArrowDown />
        </div>
        <div className='left-item'>
          <span>Starred</span>
          <KeyboardArrowDown />
        </div>
        <div className='left-item'>
          <span>Templates</span>
          <KeyboardArrowDown />
        </div>
        <div className='left-item special'>
          <span>Create</span>
        </div>
      </div>
      <div className='nav-right'>
        <div className='right-item search-wrapper'>
          <input className='search' placeholder='Search' type="search" />
          <span className='mui-icon'>
            <Search style={{
              width: '20px',
              height: '20px',
              color: 'hsla(0,0%,100%,.8)'
            }} /></span>
        </div>
        <div className='right-item right-btn'>
          <InfoOutlined />
        </div>
        <div className='right-item right-btn'>
          <NotificationsNoneOutlined />
        </div>
        <div className='right-item'>
          <span>QK</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar