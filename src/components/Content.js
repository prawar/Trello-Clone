import React from 'react'
import Board from './Board';
import './Content.css';
import Headbar from './Headbar';

const Content = () => {
  return (
    <div className='content'>
        <Headbar />
        <Board />
    </div>
  )
}

export default Content