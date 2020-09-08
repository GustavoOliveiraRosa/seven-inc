import React, { Component } from 'react';
import {Switch, Route } from 'react-router-dom';

import Login  from './Paginas/Login';
import Page1 from './Paginas/Inicio';
import Page2 from './Paginas/CriarEmpregado';


export default class Rotas extends Component {


  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={ Login } />
          <Route path='/page1' component={ Page1 } />
          <Route path='/page2' component={ Page2 } />
        </Switch>
      </div>
    );
  }
}
