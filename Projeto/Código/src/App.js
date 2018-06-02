import React, { Component } from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import { Pagina, redirecionaPara } from './rotas/Rotas'
import './App.css'


// Este componente é como se fosse o body do HTML
class App extends Component {
  state = { 
    usuario: false
  }

  logaUsuario = () => {
    this.setState({ usuario: true })
    redirecionaPara('/')
  }

  deslogaUsuario = () => {
    this.setState({ usuario: false })
    redirecionaPara('/login')
  }

  render = () => {
    return (
      <div className="app">
        <Navbar usuario={this.state.usuario} onSairClick={this.deslogaUsuario} />

        <Pagina endereco="/" componente={<Home />} />
        <Pagina endereco="/login" componente={
          <Login onEnviarClick={this.logaUsuario} />}
        />
        <Pagina endereco="/conta" componente={<Conta />} />
        <Pagina endereco="/contato" componente={<Contato />} />
        <Pagina endereco="/quem-somos" componente={<QuemSomos />} />
      </div>
    );
  }
}

export default App