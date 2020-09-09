import React, { Component } from 'react';
import { withRouter } from "react-router-dom";


class Inicio extends Component {
  
  componentDidMount() {
    const status_logado = localStorage.getItem('@nome-do-app/chave');
    if (status_logado === true){
      this.setState({redirect: true});
    }
  }

  render() {
    return (
      <div>
        <h2>Inicio </h2>
      </div>
    );
  }
}

export default Inicio;