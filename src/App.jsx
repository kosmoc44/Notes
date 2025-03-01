import { useState } from "react"
import './assets/scss/main.scss'
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import { SiEditorconfig } from "react-icons/si"
import Modal from "./components/Modal"

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "HTML",
      text: 'HTML (HyperText Markup Language) — это стандартный язык разметки для создания веб-страниц.',
      date: new Date().toLocaleDateString()
    },
    {
      id: 2,
      title: "JS",
      text: 'JavaScript (JS) — это высокоуровневый, интерпретируемый язык программирования, который используется для создания интерактивных и динамичных веб-страниц.',
      date: new Date().toLocaleDateString()
    },
    {
      id: 3,
      title: "REACT",
      text: 'React — это JavaScript-библиотека для создания пользовательских интерфейсов, разработанная Facebook.',
      date: new Date().toLocaleDateString()
    }
  ])

  const OpenModalHandler = () => {
    setIsModalOpen(true)
  }

  const closeModalHandler = () => {
    setIsModalOpen(false)
  }

  const addNoteHandler = (note) => {
    setNotes([...notes, note])
  }

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Notes
          notes={notes}
          setNotes={setNotes}
        />
        {isModalOpen &&
          <Modal
            closeModalHandler={closeModalHandler}
            notes={notes}
            addNoteHandler={addNoteHandler}
          />}

        {!isModalOpen &&
          <button
            className="editor"
            onClick={() => OpenModalHandler()}
          >
            <SiEditorconfig
              className="editor__icon"
              style={{ width: 24, height: 24 }}
            />
          </button>}

      </div>
    </>
  )
}

export default App
