import { Public, StarBorder } from '@mui/icons-material'
import React from 'react'
import './Board.css'
import CardsArea from './CardsArea'

const Board = () => {
    return (
        <div className='board'>
            <div className='board-head'>
                <h1 className='board-title'>Kanan Board</h1>
                <div className='star-wrapper'>
                    <StarBorder sx={{
                        fontSize: '18px'
                    }} />
                </div>
                <div className='bord-seprator'></div>
                <button className='board-btn'>
                    <Public sx={{
                        fontSize: '18px'
                    }} />
                    <span>Public</span>
                </button>
                <div className='bord-seprator'></div>
                <span>AH</span>
            </div>
            <CardsArea />
        </div>
    )
}

export default Board