import React, { Component } from 'react'
import { Link } from '../../../contextos/Roteamento/Roteamento'
import { comContextoDeAutenticacao } from '../../../contextos/Autenticacao/Autenticacao'
import './Menu.css'


class Menu extends Component {
    state = {
        aberto: false
    }

    abreOuFecha = () => {
        this.setState(prevState => {
            return {
                aberto: !prevState.aberto
            }
        })
    }

    handleOpcaoClick = () => {
        if (this.state.aberto) {
            this.abreOuFecha()
        }
    }

    handleSairClick = () => {
        this.handleOpcaoClick()
        this.props.autenticacao.deslogaUsuario()
    }

    render = () => {
        let botaoClasses = ['navbar-menu__botao']
        let opcoesClasses = ['navbar-menu__opcoes']

        if (this.state.aberto) {
            botaoClasses.push('navbar-menu__botao--aberto')
            opcoesClasses.push('navbar-menu__opcoes--aberto')
        }

        return (
            <nav className="navbar-menu">
                <a className={botaoClasses.join(' ')} onClick={this.abreOuFecha}>
                    Menu
                </a>

                <ul className={opcoesClasses.join(' ')}>
                    <li>
                        <Link para="/quem-somos" onClick={this.handleOpcaoClick}>
                            Quem somos
                        </Link>
                    </li>
                    <li>
                        <Link para="/contato" onClick={this.handleOpcaoClick}>
                            Contato
                        </Link>
                    </li>
                    <li>
                        {this.props.autenticacao.usuario ? (
                            <Link onClick={this.handleSairClick}>
                                Sair
                            </Link>
                        ) : (
                            <Link para="/login" onClick={this.handleOpcaoClick}>
                                Login
                            </Link>
                        )}
                    </li>
                </ul>
            </nav>
        )
    }
}

export default comContextoDeAutenticacao(Menu)