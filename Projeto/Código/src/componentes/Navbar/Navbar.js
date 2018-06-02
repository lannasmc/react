import React from 'react'
import Logo from './Logo/Logo'
import Menu from './Menu/Menu'
import { Link } from '../../contextos/Roteamento/Roteamento'
import { comContextoDeAutenticacao } from '../../contextos/Autenticacao/Autenticacao'
import './Navbar.css'


function Navbar(props) {
    return (
        <header className="navbar">
            <Link para="/">
                <Logo />
            </Link>

            <Menu />
        </header>
    )
}

export default comContextoDeAutenticacao(Navbar)