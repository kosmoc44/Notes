import {  useState } from 'react'
import { FcGrid, FcTodoList } from "react-icons/fc"

import NotesItem from "./NotesItem"
import clsx from "clsx"

const Notes = ({ notes, searchValue }) => {

    const [view, setView] = useState(true)

    const btnIcon = view ? <FcTodoList style={{ width: 24, height: 24 }} /> : <FcGrid style={{ width: 24, height: 24 }} />
    const spanText = view ? "Список" : "Сетка"

    const noteListClass = clsx('notes__list', { 'active': !view })

    return (
        <div className="notes">
            <div className="container">
                <div className="notes__top">
                    <h2 className="notes__top-title">
                        {notes.length ? "Все заметки" : "Заметок нет"}
                    </h2>
                    <button
                        className="notes__top-btn"
                        onClick={() => setView(!view)}
                    >
                        {btnIcon}
                        <span>
                            {spanText}
                        </span>
                    </button>
                </div>
                <div className={noteListClass}>
                    {notes.map((note) => (
                        <NotesItem
                            key={note.id}
                            note={note}
                            view={view}
                            searchValue={searchValue}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Notes