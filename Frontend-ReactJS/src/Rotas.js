import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';


import Login  from './Paginas/Login';
import Inicio from './Paginas/Inicio';
import CriarEmpregado from './Paginas/CriarEmpregado';
import EditarEmpregado from './Paginas/EditarEmpregado';


export default class Rotas extends Component {


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route path='/Inicio' component={ Inicio } />
          <Route path='/Login' component={ Login } />
          <Route path='/CriarEmpregado' component={ CriarEmpregado } />
          <Route path='/EditarEmpregado' component={ EditarEmpregado } />
        </Switch>
      </div>
    );
  }
}

