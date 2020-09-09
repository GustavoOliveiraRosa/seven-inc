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
  }

  componentDidMount() {

    /* Verificando se o usuário está logado */

    const status_logado = localStorage.getItem('@status_logado');
    if (status_logado != 'true') {
      this.setState({ deslogar: true });
    }

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

  Sair() {
    localStorage.setItem('@status_logado', false);
    this.setState({ deslogar: true });
  }

  render() {
    return (
      <div>
        {this.state.deslogar === true && <Route exact path="/"><Redirect to="/Login" /></Route>}
        
        <div className="titulo">

        <center>
        <h1 className="m-4">Seven-Inc</h1>
        <h5 className="m-4">Gerenciador de empregados</h5>
        <button  onClick={this.Sair} className="btn btn-danger btn-block">Sair</button>
        </center>
        
        </div>
        
        <table className="table table-dark">
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
              this.state.data.map((data =>
                <tr>
                  <th scope="row">{data.nome}</th>
              <td>{data.bornDate}</td>
                  <td>{data.salary}</td>
                  <td>{data.position}</td>
                  <td> <button  className="btn btn-danger btn-block">Excluir</button>
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