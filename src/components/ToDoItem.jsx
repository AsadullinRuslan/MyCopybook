import React, { useState } from 'react';
import MyCheckbox from './MyCheckbox';

const ToDoItem = ({index, title, onClickDelete, i}) => {
    const [important, setImportant] = useState(false);

    return (
        <div className={`newWrite ${important ? 'important' : ''}`} >
            <h3>{i+1}. {title}</h3>
            <div className='changeItem'>
                <MyCheckbox setImportant={setImportant} important={important} />
                <label style={{margin:'0 30px 0 -20px'}} >Важное</label>
                <button onClick={() => onClickDelete(index)} className='btn' > Х </button>
            </div>
        </div>
    );
}

export default ToDoItem;
