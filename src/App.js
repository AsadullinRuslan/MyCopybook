import React, { useEffect, useState } from "react";
import ToDoItem from "./components/ToDoItem";
import NewItem from "./components/NewItemModalWindow";

const App = () => {
    const [modal, setModal] = useState(false);
    const [search, setSearch] = useState("");

    const [listToDo, setListToDo] = useState([
        {
            index: Date.now() + 1,
            title: "Рано вставать",
        },
        {
            index: Date.now() + 2,
            title: "Умываться с утра",
        },
        {
            index: Date.now() + 3,
            title: "Завтракать",
        },
    ]);

    const onClickDelete = (i) => {
        setListToDo(listToDo.filter((item) => item.index !== i));
        console.log(listToDo);
    };

    useEffect(() => {}, []);

    return (
        <div
            style={{ textAlign: "center" }}
            className="container"
            onKeyDown={(e) => e.key === "Escape" && setModal(false)}
        >
            <h1>Мои записи</h1>
            <button onClick={() => setModal(true)} className={"btn width30"}>
                Добавить...
            </button>
            <form className="search">
                <input
                    id="searchInput"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Поиск..."
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
                    );
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
    );
};

export default App;
