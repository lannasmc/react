import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import { Link } from '../../rotas/Rotas'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
            <Link para={props.usuario ? '/' : '/login'}>
                <Logo />
            </Link>

            <Menu usuario={props.usuario} onSairClick={props.onSairClick} />
        </header>
    )
}

export default Navbar