import clsx from "clsx"
import { useContext } from "react"

import { BiSolidMessageSquareEdit } from "react-icons/bi"
import { FcDeleteDatabase } from "react-icons/fc"
import { TodoContext } from "../context/context"

const NotesItem = ({ note, view, searchValue }) => {

    const { changeHandler, delNoteHandler } = useContext(TodoContext)

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
                    {!searchValue &&
                        <>
                            <button
                                className="notes-item__btn purple"
                                onClick={() => changeHandler(note)}
                            >
                                <BiSolidMessageSquareEdit style={{ width: 24, height: 24 }}
                                />
                                <span>Редактировать</span>
                            </button>
                            <button
                                className="notes-item__btn red"
                                onClick={() => delNoteHandler(note.id)}
                            >
                                <FcDeleteDatabase style={{ width: 24, height: 24 }} />
                                <span>Удалить</span>
                            </button>
                        </>
                    }


                </div>
            </div>
        </>
    )
}

export default NotesItem