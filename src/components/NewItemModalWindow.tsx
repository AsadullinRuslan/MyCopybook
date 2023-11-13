import React, { useState } from "react";

interface INewItem {
    modal: boolean, 
    setModal: any, 
    listToDo: object[], 
    setListToDo: any,
}

const NewItem = ({ modal, setModal, listToDo, setListToDo }: INewItem) => {
    const [title, setTitle] = useState<String>("");

    const onClickCreate = () => {
        if (title.trim()) {
            const newItem = {
                index: Date.now(),
                title,
            };
            setListToDo([...listToDo, newItem]);
        }
        setTitle("");
        setModal(false);
    };

    return (
        <div 
            onKeyDown={e => e.key === 'Enter' && onClickCreate()}
            onClick={() => setModal(false)}
            className={`newItem ${modal ? "show" : ""}`}
        >
            <div className="item" onClick={(e) => e.stopPropagation()}>
                <label>Новое событие:</label>
                <input
                    autoFocus
                    className="newTitle"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button onClick={onClickCreate} className="btn width30">
                    Создать
                </button>
            </div>
        </div>
    );
};

export default NewItem;
