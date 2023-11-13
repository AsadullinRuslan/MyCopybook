import React, { useEffect, useState } from 'react'
import ToDoItem from './components/ToDoItem'
import NewItem from './components/NewItemModalWindow'
import { useDispatch } from 'react-redux'
import { fetchToDo } from './store/actions/toDoActions'
// import { RootState } from "./store/store";
// import toDoSlice from './store/slices/toDoSlice'
// import { IToDo } from "./models/models";

interface IListToDo {
    index: number
    title: string
}

const App = () => {
    const [modal, setModal] = useState(false)
    const [search, setSearch] = useState('')

    const [listToDo, setListToDo] = useState<IListToDo[]>([
        {
            index: Date.now() + 1,
            title: 'Рано вставать',
        },
        {
            index: Date.now() + 2,
            title: 'Умываться с утра',
        },
        {
            index: Date.now() + 3,
            title: 'Завтракать',
        },
    ])

    const dispatch = useDispatch()
    // const {} = useSelector(state => state)

    useEffect(() => {
        dispatch(fetchToDo())
    }, [])

    const onClickDelete = (e: any): any => {
        setListToDo(listToDo.filter((item) => item.index !== e))
    }

    return (
        <div
            style={{ textAlign: 'center' }}
            className='container'
            onKeyDown={(e) => e.key === 'Escape' && setModal(false)}
        >
            <h1>Мои записи</h1>
            <button onClick={() => setModal(true)} className={'btn width30'}>
                Добавить...
            </button>
            <form className='search'>
                <input
                    id='searchInput'
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder='Поиск...'
                />
            </form>
            {listToDo
                .filter((obj) =>
                    obj.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((item, i) => {
                    return (
                        <ToDoItem
                            key={item.index}
                            onClickDelete={onClickDelete}
                            i={i}
                            index={item.index}
                            title={item.title}
                        />
                    )
                })}
            {modal && (
                <NewItem
                    setModal={setModal}
                    modal={modal}
                    listToDo={listToDo}
                    setListToDo={setListToDo}
                />
            )}
        </div>
    )
}

export default App
