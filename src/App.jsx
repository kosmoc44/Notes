import { useState } from "react"
import './assets/scss/main.scss'
import Navbar from "./components/Navbar"
import Notes from "./components/Notes"
import { SiEditorconfig } from "react-icons/si"

function App() {

  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "title",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      date: '07.03.2022'
    },
    {
      id: 2,
      title: "title",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      date: '07.03.2022'
    },
    {
      id: 3,
      title: "title",
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
      date: '07.03.2022'
    }
  ])

  return (
    <>
      <div className="wrapper">
        <Navbar />
        <Notes
          notes={notes}
          setNotes={setNotes}
        />
        <button className="editor">
          <SiEditorconfig
            className="editor__icon"
            style={{ width: 24, height: 24 }}
          />
        </button>
      </div>
    </>
  )
}

export default App
