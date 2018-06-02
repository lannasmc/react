import React from 'react'
import ReactDOM from 'react-dom'
import { Paginas } from './rotas/Rotas'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

ReactDOM.render(
    <Paginas>
        <App />
    </Paginas>, 
    document.getElementById('root')
)

registerServiceWorker()