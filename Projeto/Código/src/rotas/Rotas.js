import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'

const { Provider, Consumer} = React.createContext();

const history = createHistory()

export const redirecionaPara = history.push

export class Paginas extends Component {
    state = {
        localizacao: history.location
    }
    
    componentDidMount = () => {
        this.unlisten = history.listen(location => {
            this.setState({
                localizacao: location
            })
        })
    }

    componentWillUnmount = () => {
        this.unlisten()
    }

    render() {
        return (
            <Provider value={this.state}>
                {this.props.children}
            </Provider>
        )
    }
}

export function Pagina(props) {
    return (
        <Consumer>
            {contexto => (
                contexto.localizacao.pathname === props.endereco ? 
                props.componente : 
                null
            )}
        </Consumer>
    )
}

export function Link(props) {
    function handleLinkClick(e) {
        e.preventDefault()

        if (props.para) {
            redirecionaPara(props.para)
        }

        if (props.onClick) {
            props.onClick()
        }
    }

    return (
        <a className={props.className} onClick={handleLinkClick}>
            {props.children}
        </a>
    )
}