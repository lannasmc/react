import React, { Component } from 'react'
import { comContextoDeRoteamento } from '../Roteamento/Roteamento'


const { Provider, Consumer } = React.createContext()

class Autenticacao extends Component {
    constructor(props) {
        super(props)
        this.state = {
            usuario: false,
            logaUsuario: this.logaUsuario,
            deslogaUsuario: this.deslogaUsuario
        }
    }

    logaUsuario = () => {
        this.setState({ usuario: true })
        this.props.roteamento.redirecionaPara('/')
    }

    deslogaUsuario = () => {
        this.setState({ usuario: false })
        this.props.roteamento.redirecionaPara('/login')
    }

    render = () => {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

export default comContextoDeRoteamento(Autenticacao)

export function comContextoDeAutenticacao(Componente) {
    return props => (
        <Consumer>
            {contexto => <Componente {...props} autenticacao={contexto} />}
        </Consumer>
    )
}