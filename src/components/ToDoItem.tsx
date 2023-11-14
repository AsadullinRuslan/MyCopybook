import React, { useId, FC, useState } from 'react'

interface IToDoItem {
    index: number
    title: string
    onClickDelete: FC
    i: number
}

const ToDoItem = ({ index, title, onClickDelete, i }: IToDoItem) => {

    const [important, setImportant] = useState<boolean>(false)

    const itemId = useId()

    return (
        <div className={`newWrite ${important ? 'important' : ''}`}>
            
            <h3 style={{ width: '100%', display: 'flex' }}>
                {i + 1}. {title}
            </h3>

            <input
                type='checkbox'
                id={itemId}
                onChange={() => setImportant(!important)}
                style={{ marginRight: '30px' }}
            />

            <label htmlFor={itemId} style={{ margin: '0 30px 0 -20px' }}>
                Важное
            </label>

            <button onClick={() => onClickDelete(index)} className='btn'>
                {' '}
                Х{' '}
            </button>

        </div>
    )
}

export default ToDoItem
