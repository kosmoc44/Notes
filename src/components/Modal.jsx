import { useContext, useEffect, useState } from "react"
import { FcCancel } from "react-icons/fc"
import { IoMdCloseCircle } from "react-icons/io"
import { MdBookmarkAdded } from "react-icons/md"
import { v4 as uuidv4 } from "uuid"
import { TodoContext } from "../context/context"



const Modal = ({ edit, editNote }) => {

    const { addOrChangeHandler, closeModalHandler } = useContext(TodoContext)

    const [input, setInput] = useState(editNote?.title ?? '')
    const [text, setText] = useState(editNote?.text ?? '')
    const [isChanged, setIsChanged] = useState(false)

    useEffect(() => {
        if (editNote) {
            setIsChanged(input !== editNote.title || text !== editNote.text)
        }
    }, [input, text, editNote])

    const addOrChange = () => {
        const note = {
            id: editNote?.id ?? uuidv4(),
            title: input,
            text: text,
            date: new Date().toLocaleDateString()
        }
        addOrChangeHandler(note)
        closeModalHandler()
    }

    const cancelNote = () => {
        setInput(editNote?.title ?? '')
        setText(editNote?.text ?? '')
    }

    return (
        <div className="modal" onClick={() => closeModalHandler()}>
            <div className="modal__block" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal__block-title">
                    {edit ? "Изменить заметку" : "Добавить заметку"}
                </h2>
                <div className="modal__block-inputs">
                    <label>
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Title"
                        />
                        <span>Title</span>
                    </label>
                    <label>
                        <input
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            type="text"
                            placeholder="Content"
                        />
                        <span>Content</span>
                    </label>
                </div>
                <div className="modal__block-btns">
                    {!edit ? (
                        <button
                            className="modal__block-btn purple"
                            onClick={() => addOrChange()}
                            disabled={!input && !text}
                        >
                            <MdBookmarkAdded
                                style={{ width: 24, height: 24 }}
                            />
                            <span>Добавить</span>
                        </button>
                    ) : (
                        <button
                            className="modal__block-btn purple"
                            onClick={() => addOrChange()}
                            disabled={!input && !text || !isChanged}
                            style={{ opacity: !isChanged ? 0.5 : 1 }}
                        >
                            <MdBookmarkAdded
                                style={{ width: 24, height: 24 }}
                            />
                            <span>Изменить</span>
                        </button>
                    )
                    }
                    <button
                        className="modal__block-btn red"
                        onClick={() => cancelNote()}
                    >
                        <FcCancel
                            style={{ width: 24, height: 24 }}
                        />
                        <span>Отменить</span>
                    </button>
                </div>
                <button className="modal__block-close" onClick={() => closeModalHandler()}>
                    <IoMdCloseCircle
                        style={{ width: 24, height: 24 }}

                    />
                </button>
            </div>
        </div>
    )
}

export default Modal