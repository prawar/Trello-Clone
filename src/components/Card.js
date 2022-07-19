import { Add, Close, MoreHoriz } from '@mui/icons-material'
import React, { useState } from 'react'
import { Draggable, Droppable } from 'react-beautiful-dnd';
import './Card.css'

const Card = ({ item, handleChip }) => {
  const [show, setShow] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    handleChip(item.id, inputValue);
    setInputValue('');
  }
  const handleInput = e => {
    setInputValue(e.target.value)
  }
  return (
    <div className='card'>
      <div className='card-title'>
        <h3>{item?.title}</h3>
        <MoreHoriz sx={{ fontSize: '24px' }} />
      </div>
      <Droppable droppableId={`${item.title}`}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {item.task?.map((chip, index) => (
              <Draggable draggableId={`single-${item.title}-${index}`} index={index}>
                {(provided) => (
                  <div 
                  className='card-item' key={index}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  ref={provided.innerRef}>
                    <h3 className='card-item-title'>{chip}</h3>
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      {show ?
        <form>
          <input className='new-task-input'
            value={inputValue}
            onChange={handleInput} />
          <div className='new-task-add'>
            <button
              className='new-task-add-btn'
              onClick={handleSubmit}>Add Card
            </button>
            <Close sx={{
              width: '32px',
              height: '32px',
              lineHeight: '32px',
              color: '#42526e',
              marginLeft: '8px',
              cursor: 'pointer'
            }} onClick={() => setShow(false)} />
          </div>
        </form>
        :
        <div className='card-add' onClick={() => setShow(true)}>
          <Add />
          <span>Add a card</span>
        </div>
      }
    </div>
  )
}

export default Card