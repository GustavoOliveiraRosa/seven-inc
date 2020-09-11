import React, { Component } from 'react';
import './App.css';
import api from './Api';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CurrencyInput from 'react-currency-input';
import { format } from 'date-fns';

class EditarEmpregado extends Component {
  constructor(props) {
    super(props)
    this.state = {
      bornDate_Final: '',
      nome: '',
      salario: '',
      cargo: '',
      date: "",
      empregadocriado: false,
      deslogar: false,
      voltarInicio: false,
      data: []
    }
    this.Sair = this.Sair.bind(this);
    this.SendAPI = this.SendAPI.bind(this);
  }

  componentDidMount() {
    /* Verificando se o usuário está logado */

    const status_logado = localStorage.getItem('@status_logado');
    if (status_logado != 'true') {
      this.setState({ deslogar: true });
    }

    const id_editar = localStorage.getItem('@id_editar');

   
     /* Fazendo busca por ID */
     const self = this;
     const axios = require('axios')
     axios.get(api+"/"+id_editar,
       {
         headers: {
           Authorization: 'access-control-allow-origin'
         }
       })
       .then(function (response) {
         if (response.data.Status === "Fail"){
           alert("Error - Nada encontrado")
         }
         else{
          self.setState({ data: response.data });
          const data_recebida = response.data[0].bornDate;
          const data_criada = new Date(data_recebida);
          const data_final = format(data_criada, 'yyyy-MM-dd');
          self.setState({ bornDate_Final: data_final.toLocaleString() });
         }
       })

  }

  Sair() {
    localStorage.setItem('@status_logado', false);
    this.setState({ deslogar: true });
  }

  SendAPI(event){
    event.preventDefault();

   const self = this;

   event.preventDefault()
   if(this.state.nome === "" | this.refs.myinput.getMaskedValue() === '0.00' | this.state.cargo === "" | this.state.date === ""){
     alert("Preencha todos os campos.")
   }
   else{
    const self = this;
    const axios = require('axios')
    axios.post(api, {
      nome: this.state.nome,
      salary:this.refs.myinput.getMaskedValue(),
      position:this.state.cargo,
      bornDate:this.state.date.split("-").join("/"),
    },
    {
      headers: {
        Authorization: 'access-control-allow-origin'
      }
    })
    .then(function (response) {
      console.log(response.data.Status)
      if (response.data.Status === 'Fail'){
        alert("Fail")
      }
      else{
        alert('Usuario criado com sucesso')
        self.setState({ data: response.data});
      }
    })


   }




}





  render() {
    

    return (
      <div>
        {this.state.voltarInicio === true && <Route exact path="/"><Redirect to="/Login" /></Route>}
        {this.state.empregadocriado === true && <Route exact path="/"><Redirect to="/Login" /></Route>}
        {this.state.deslogar === true && <Route exact path="/"><Redirect to="/Login" /></Route>}
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a className="navbar-brand" href="#">Employees</a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link"  onClick={() => this.setState({ voltarInicio: true })} href="#">Inicio</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Criar Usuário<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="#" onClick={this.Sair}>Sair</a>
      </li>
    </ul>
  </div>
</nav>

        <div className="titulo">

        <center>
        <h1 className="m-4">Editar Empregado</h1>
        </center>
        
        </div>

        {
          
              this.state.data.map((resposta =>
<div>
<div className="ml-4 mr-4">
  <div className="form-group">
    <label >Nome Completo</label>
    <input type="text" value={resposta.nome} onChange={(event) => this.setState({ nome: event.target.value }) }   className="form-control" aria-describedby="emailHelp" placeholder="" />
  </div>
  <div className="form-group">
    <label >Data de Inicio</label>
    <input value={this.state.bornDate_Final} onChange={(event) => this.setState({ date: event.target.value }) } type="date" data-date-format="DD MMMM YYYY" className="form-control" data-date-format='yy-mm-dd' aria-describedby="emailHelp" />
  </div>
  <div className="form-group">
    <label >Cargo</label>
    <input type="text" onChange={(event) => this.setState({ cargo: event.target.value }) }   className="form-control" aria-describedby="emailHelp" placeholder="" />
  </div>
  <div className="form-group">
    <label >Salário</label>
    <CurrencyInput decimalSeparator="." thousandSeparator="" ref="myinput"  className="form-control" />
  </div>
  <button type="submit" onClick={() => alert(this.state.bornDate_Final)} className="btn btn-primary">Criar funcionário</button>
  </div>
  </div>
))
}

  
      </div>
    );
  }
}

export default EditarEmpregado;