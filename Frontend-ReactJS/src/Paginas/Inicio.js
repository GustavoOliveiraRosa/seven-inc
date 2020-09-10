import React, { Component } from 'react';
import './App.css';
import api from './Api';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Inicio extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deslogar: false,
      data: []
    }
    this.Sair = this.Sair.bind(this);
    this.excluir_funcionario = this.excluir_funcionario.bind(this);
  }

  atualizaTabela(){
    /* Pegando os dados da API assim que a página for carregada */

    const self = this;
    const axios = require('axios')
    axios.get(api,
      {
        headers: {
          Authorization: 'access-control-allow-origin'
        }
      })
      .then(function (response) {
        self.setState({ data: response.data });
      })
  }

  componentDidMount() {

    /* Verificando se o usuário está logado */

    const status_logado = localStorage.getItem('@status_logado');
    if (status_logado != 'true') {
      this.setState({ deslogar: true });
    }
    this.atualizaTabela();

  }

  Sair() {
    localStorage.setItem('@status_logado', false);
    this.setState({ deslogar: true });
  }

  excluir_funcionario(id) {
    const self = this;
    const axios = require('axios')
    axios.delete(api+'/'+id,
      {
        headers: {
          Authorization: 'access-control-allow-origin'
        }
      })
      .then(function (response) {
        alert('Empregado excluido com sucesso.')
        self.atualizaTabela();
      })
  }


  render() {
    return (
      <div>
        {this.state.deslogar === true && <Route exact path="/"><Redirect to="/Login" /></Route>}
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Employees</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Criar Usuário</a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="#" onClick={this.Sair}>Sair</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Buscar por nome" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
    </form>
  </div>
</nav>
        <div className="titulo">

        <center>
        <h1 className="m-4">Gerenciador Empregados</h1>
        </center>
        
        </div>
        <table className="table table-dark ">
          <thead>
            <tr>
              <th scope="col">Nome</th>
              <th scope="col">Data de inicio</th>
              <th scope="col">Salario</th>
              <th scope="col">Cargo</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.data.map((resposta =>
                <tr>
                  <th scope="row">{resposta.nome}</th>
              <td>{resposta.bornDate}</td>
                  <td>{resposta.salary}</td>
                  <td>{resposta.position}</td>
                  <td>
                  <button  data-id={resposta.id} onClick={() => this.excluir_funcionario(resposta.id)}  className="btn btn-danger btn-block">Excluir</button>
                  <button  className="btn btn-warning btn-block">Editar</button></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default Inicio;