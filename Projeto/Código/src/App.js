import React from 'react'
import Navbar from './componentes/Navbar/Navbar'
import Home from './paginas/Home/Home'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import Contato from './paginas/Contato/Contato'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import { Pagina } from './contextos/Roteamento/Roteamento'
import { comContextoDeAutenticacao } from './contextos/Autenticacao/Autenticacao'
import './App.css'


// Este componente é como se fosse o body do HTML
function App(props) {
  const Inicial = props.autenticacao.usuario ? Home : Login

  return (
    <div className="app">
      <Navbar />

      <Pagina endereco="/" componente={<Inicial />} />
      <Pagina endereco="/login" componente={<Login />} />
      <Pagina endereco="/conta" componente={<Conta />} />
      <Pagina endereco="/contato" componente={<Contato />} />
      <Pagina endereco="/quem-somos" componente={<QuemSomos />} />
    </div>
  );
}

export default comContextoDeAutenticacao(App)