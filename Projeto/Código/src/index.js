import React from 'react'
import ReactDOM from 'react-dom'
import Roteamento from './contextos/Roteamento/Roteamento'
import Autenticacao from './contextos/Autenticacao/Autenticacao'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
    <Roteamento>
        <Autenticacao>
            <App />
        </Autenticacao> 
    </Roteamento>,
    document.getElementById('root')
)

registerServiceWorker()