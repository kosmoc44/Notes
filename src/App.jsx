import { useEffect, useState } from "react"
import './assets/scss/main.scss'
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import { SiEditorconfig } from "react-icons/si"
import Modal from "./components/Modal"
import { toast, ToastContainer, Zoom } from "react-toastify"
import { TodoContext } from './context/context'

function App() {

  const DEFAULT_NOTES = [
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
  ]

  const getLS = () => localStorage.notes ? JSON.parse(localStorage.notes) : []
  const setLs = () => localStorage.notes = JSON.stringify(notes)

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [editNote, setEditNote] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [notes, setNotes] = useState(() => {
    const localNotes = getLS();
    return localNotes.length > 0 ? localNotes : DEFAULT_NOTES
  })


  useEffect(() => {
    setLs()
  }, [notes])

  const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchValue.toLowerCase()))

  const isDefault = (id) => DEFAULT_NOTES.some(note => note.id === id)
  const OpenModalHandler = () => {
    setIsModalOpen(true)
    setIsEdit(false)
    setEditNote(null)
  }
  const closeModalHandler = () => {
    setIsModalOpen(false)
  }
  const addOrChangeHandler = (note) => {
    if (isDefault(note.id)) {
      toast.warn('Этот объект нельзя изменить, так как он является исходным!')
      return
    }

    if (editNote?.id) {
      const updateNote = notes.map(item => {
        if (item.id === note.id) {
          toast.success('Заметка успешно изменена!')
          return note
        }
        return item
      })
      setNotes(updateNote)
    } else {
      setNotes([...notes, note])
      toast.success('Заметка успешно добавлена!')
    }

  }
  const delNoteHandler = (id) => {
    if (isDefault(id)) {
      toast.warn('Этот объект нельзя удалить, так как он является исходным!')
      return
    }
    setNotes(notes.filter(note => note.id !== id))
    toast.warn('Заметка удалена!')
  }
  const changeHandler = (note) => {
    if (isDefault(note.id)) {
      toast.warn('Этот объект нельзя изменить, так как он является исходным!')
      return
    }
    setIsModalOpen(true)
    setIsEdit(true)
    setEditNote(note)
  }
  const setSearchingHandler = (search) => {
    setSearchValue(search)
  }

  return (
    <TodoContext.Provider value={{
      setSearchingHandler,
      changeHandler,
      delNoteHandler,
      addOrChangeHandler,
      closeModalHandler,
    }}>
      <>
        <ToastContainer
          transition={Zoom}
          autoClose={3000}
        />
        <div className="wrapper">
          <Navbar />
          <Notes
            notes={filteredNotes}
            searchValue={searchValue}
          />
          {isModalOpen &&
            <Modal
              notes={notes}
              edit={isEdit}
              editNote={editNote}
            />}

          {!isModalOpen &&
            <button
              className="editor"
              onClick={() => OpenModalHandler()}
            >
              <SiEditorconfig
                className="editor__icon"
                style={{ width: 24, height: 24, }}
              />
            </button>}

        </div>
      </>
    </TodoContext.Provider>

  )
}

export default App
