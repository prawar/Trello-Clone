import { Add, Close } from '@mui/icons-material'
import React, { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import Card from './Card'
import './CardsArea.css'

const CardsArea = () => {
    // const initialState = [
    //     {
    //         id: 1,
    //         title: 'To Do',
    //         task: ['Helpdesk Call BB999', 'Helpdesk Call AA999']
    //     },
    //     {
    //         id: 2,
    //         title: 'Development',
    //         task: ['Helpdesk Call EE999', 'Helpdesk Call CC999']
    //     },
    //     {
    //         id: 3,
    //         title: 'To Do',
    //         task: ['Helpdesk Call DD999']
    //     }
    // ]
    const [show, setShow] = useState(false);
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = e => {
        e.preventDefault();
        const newState = [...items, {
            'id': items.length,
            'title': inputValue,
            'task': []
        }]
        setItems(newState);
        setShow(false);
        setInputValue('');
    }
    const handleInput = e => {
        setInputValue(e.target.value)
    }

    const handleChip = (id, val) => {
        console.log(items, id, val)
        const newState = items.map(obj => {
            if (obj.id === id) {
                obj.task = [...obj.task, val];
            }
            return obj;
        })
        setItems(newState);
    }
    const onDragEnd = (result) => {
        const {source, destination} = result;
        console.log(result);
        if(!destination) return;

        if(source.droppableId === destination.droppableId && source.index===destination.index) return;

        let add, active, complete, inx1, inx2;
        for(let i=0;i<items.length;i++){
            if(items[i].title === source.droppableId){
                active = [...items[i].task];
                inx1 = i;
            }
            if(items[i].title === destination.droppableId){
                complete = [...items[i].task];
                inx2 = i;
            }
            
        }
        add = active[source.index];
        active.splice(source.index,1);
        complete.splice(destination.index,0,add);
        
        const newState = [...items];

        newState[inx1].task = active;
        newState[inx2].task = complete;

        setItems(newState);


    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div className='content-area'>
                {items.map((item, index) => (
                    <Card
                        key={index}
                        item={item}
                        handleChip={handleChip} />
                ))}
                <div className='new-list-wrapper'>
                    {show ?
                        <form>
                            <input className='new-task-input'
                                value={inputValue}
                                onChange={handleInput} />
                            <div className='new-task-add'>
                                <button
                                    className='new-task-add-btn'
                                    onClick={handleSubmit}>Add List
                                </button>
                                <Close sx={{
                                    width: '32px',
                                    height: '32px',
                                    lineHeight: '32px',
                                    color: '#42526e',
                                    marginLeft: '8px',
                                    cursor: 'pointer'
                                }}
                                    onClick={() => setShow(false)} />
                            </div>
                        </form>
                        :
                        <div className='new-list-add' onClick={() => setShow(true)}>
                            <Add sx={{
                                fontWeight: 'normal',
                                fontStyle: 'normal',
                                fontSize: '24px',
                                lineHeight: '1',
                                letterSpacing: 'normal',
                                textTransform: 'none',
                                display: 'inline-block',
                                whiteSpace: 'nowrap',
                                wordWrap: 'normal'
                            }} />
                            Add another list
                        </div>
                    }
                </div>
            </div>
        </DragDropContext>
    )
}

export default CardsArea