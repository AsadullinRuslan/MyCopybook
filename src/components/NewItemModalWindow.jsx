import React, { useState } from "react";

const NewItem = ({ modal, setModal, listToDo, setListToDo }) => {
    const [title, setTitle] = useState("");

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

    const onChangeTitle = (e) => {
        setTitle(e);
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
                    onChange={(e) => onChangeTitle(e.target.value)}
                />
                <button onClick={onClickCreate} className="btn width30">
                    Создать
                </button>
            </div>
        </div>
    );
};

export default NewItem;
