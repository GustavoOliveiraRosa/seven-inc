import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class Inicio extends Component {

  componentDidMount() {
    const status_logado = localStorage.getItem('@nome-do-app/chave');
    /*if (status_logado === true){
      this.setState({redirect: true});
    }*/
  }

  render() {
    return (
      <div>
        
        <h1 className="titulo">Seven-Inc</h1>

        <div  className="table_responsive" name="Table">
        <table>
  <tr>
    <th className="text">Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table> 
        </div>
      </div>
    );
  }
}

export default Inicio;