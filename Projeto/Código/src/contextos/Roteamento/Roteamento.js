import React, { Component } from 'react'
import createHistory from 'history/createBrowserHistory'


const { Provider, Consumer} = React.createContext();

const history = createHistory()

export default class Roteamento extends Component {
    state = {
        localizacao: history.location,
        redirecionaPara: history.push
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
    function handleLinkClick(contexto, e) {
        e.preventDefault()

        if (props.para) {
            contexto.redirecionaPara(props.para)
        }

        if (props.onClick) {
            props.onClick()
        }
    }

    return (
        <Consumer>
            {contexto => (
                <a className={props.className} onClick={handleLinkClick.bind(this, contexto)}>
                    {props.children}
                </a>
            )}
        </Consumer>
    )
}

export function comContextoDeRoteamento(Componente) {
    return props => (
        <Consumer>
            {contexto => <Componente {...props} roteamento={contexto} />}
        </Consumer>
    )
}