import clsx from "clsx"

import { BiSolidMessageSquareEdit } from "react-icons/bi"
import { FcDeleteDatabase } from "react-icons/fc"

const NotesItem = ({ note, view }) => {
    const notesItemTopClass = clsx('notes-item__top', { 'grid': !view })

    return (
        <>
            <div className="notes-item">
                <div className={notesItemTopClass}>
                    <h2 className="notes-item__top-title">{note.title}</h2>
                    <span>{note.date}</span>
                </div>
                <p className="notes-item__txt">
                    {note.text}
                </p>
                <div className="notes-item__btns">
                    <button className="notes-item__btn purple">
                        <BiSolidMessageSquareEdit style={{ width: 24, height: 24 }}
                        />
                        <span>Редактировать</span>
                    </button>
                    <button className="notes-item__btn red">
                        <FcDeleteDatabase style={{ width: 24, height: 24 }} />
                        <span>Удалить</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default NotesItem