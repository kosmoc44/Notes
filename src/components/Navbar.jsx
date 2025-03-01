import React from 'react'
import { FaLanguage } from "react-icons/fa"
import { FcSearch } from "react-icons/fc"

const Navbar = () => {
    return (
        <header className="header">
            <nav className="header__nav container">
                <button className="header__nav-lang">
                    <FaLanguage
                        style={{ width: 35, height: 35 }}
                    />
                </button>
                <h1 className="header__nav-title">
                    Заметки
                </h1>
                <button className="header__nav-serach">
                    <FcSearch style={{ width: 26, height: 26 }} />
                </button>
            </nav>
        </header>
    )
}

export default Navbar