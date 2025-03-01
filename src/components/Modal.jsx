import { useState } from "react"
import { FcCancel } from "react-icons/fc"
import { MdBookmarkAdded } from "react-icons/md"
import { v4 as uuidv4 } from "uuid"


const Modal = ({ closeModalHandler, addNoteHandler }) => {

    const [input, setInput] = useState('')
    const [text, setText] = useState('')

    const add = () => {
        const note = {
            id: uuidv4(),
            title: input,
            text: text,
            date: new Date().toLocaleDateString()
        }
        addNoteHandler(note)
        closeModalHandler()

    }

    const cancelNote = () => {
        setInput('')
        setText('')
    }

    return (
        <div className="modal" onClick={() => closeModalHandler()}>
            <div className="modal__block" onClick={(e) => e.stopPropagation()}>
                <h2 className="modal__block-title">
                    Добавить заметку
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
                    <button
                        className="modal__block-btn purple"
                        onClick={() => add()}
                        disabled={!input && !text}
                    >
                        <MdBookmarkAdded
                            style={{ width: 24, height: 24 }}
                        />
                        <span>Добавить</span>
                    </button>
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
            </div>
        </div>
    )
}

export default Modal