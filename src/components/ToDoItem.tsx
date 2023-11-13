import React, { FC, useState } from 'react';

interface IToDoItem {
    index: number,
    title: string, 
    onClickDelete: FC, 
    i: number
}

const ToDoItem = ({index, title, onClickDelete, i}: IToDoItem) => {
    const [important, setImportant] = useState<boolean>(false);

    return (
        <div className={`newWrite ${important ? 'important' : ''}`} >
            <h3>{i+1}. {title}</h3>
            <form className='changeItem'>
                <input type='checkbox' id={`important.${new Date()}`} onChange={() => setImportant(!important)} style={{marginRight: '30px'}}/>
                <label htmlFor={`important.${new Date()}`} style={{margin:'0 30px 0 -20px'}} >Важное</label>
                <button onClick={() => onClickDelete(index)} className='btn' > Х </button>
            </form>
        </div>
    );
}

export default ToDoItem;
