import React, { Component } from 'react';
import './App.css';
import api from './Api';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CurrencyInput from 'react-currency-input';



class CriarEmpregado extends Component {
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

  }

  Sair() {
    localStorage.setItem('@status_logado', false);
    this.setState({ deslogar: true });
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
        <a className="nav-link" href="#">Inicio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Criar Usuário<span className="sr-only">(current)</span></a>
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
        <h1 className="m-4">Criar Usuário</h1>
        </center>
        
        </div>

<div className="ml-4 mr-4">
  <div className="form-group">
    <label >Nome Completo</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="" />
  </div>
  <div className="form-group">
    <label >Data de Inicio</label>
    <input type="date" className="form-control" data-date-format='yy-mm-dd' aria-describedby="emailHelp" />
  </div>
  
  <div className="form-group">
    <label >Salário</label>
    <CurrencyInput className="form-control" ref="myinput" />
  </div>
  <div className="form-group">
    <label >Cargo</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="" />
  </div>
  <button type="submit" className="btn btn-primary">Criar funcionário</button>
  </div>
      </div>
    );
  }
}

export default CriarEmpregado;