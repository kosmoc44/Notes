import { useEffect, useState, useRef, useContext } from 'react'
import { BiFontSize } from "react-icons/bi"
import { FaLanguage } from "react-icons/fa"
import { FcSearch } from "react-icons/fc"
import { IoCloseSharp } from "react-icons/io5"
import { RxFontStyle } from "react-icons/rx"
import { TiArrowBackOutline } from "react-icons/ti"
import { TodoContext } from '../context/context'

const Navbar = () => {
    const { setSearchingHandler } = useContext(TodoContext)

    const isMounted = useRef(true)
    const inputRef = useRef(null)
    const [openSearch, setOpenSearch] = useState(false)
    const [input, setInput] = useState('')

    const openSearchHandler = () => {
        setOpenSearch(true)
        setInput('')
    }

    useEffect(() => {
        if (openSearch && inputRef.current) {
            inputRef.current.focus()
        }
    }, [openSearch])

    useEffect(() => {
        if (!isMounted.current) {
            setSearchingHandler(input)
        }
        isMounted.current = false
    }, [input, setSearchingHandler])

    return (
        <header className="header">
            {!openSearch ? (
                <nav className="header__nav container">
                    <button className="header__nav-lang">
                        <FaLanguage
                            style={{ width: 35, height: 35 }}
                        />
                    </button>
                    <h1 className="header__nav-title">
                        Заметки
                    </h1>
                    <button
                        className="header__nav-serach"
                        onClick={openSearchHandler}
                    >
                        <FcSearch style={{ width: 26, height: 26 }} />
                    </button>
                </nav>
            ) : (
                <nav className="header__search container">
                    <button
                        className="header__search-back"
                        onClick={() => setOpenSearch(false)}
                    >
                        <TiArrowBackOutline style={{ width: 30, height: 30, color: '#6750A4' }} />
                    </button>
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="header__search-input"
                        type="text"
                        placeholder="Поиск..."
                    />
                    <button
                        className="header__search-close"
                        onClick={() => setInput('')}
                    >
                        <IoCloseSharp style={{ width: 30, height: 30, color: '#CF1B1B' }} />
                    </button>
                </nav>
            )
            }
        </header>
    )
}

export default Navbar