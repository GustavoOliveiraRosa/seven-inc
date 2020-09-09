import React from 'react';
import './App.css';
import api from './Api';
import {Switch, Route, Redirect, Link } from 'react-router-dom';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      redirect: false,
      email: '',
      senha: ''
           }
    this.changeEmail = this.changeEmail.bind(this)
    this.changeSenha = this.changeSenha.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

 componentDidMount() {
  const status_logado = localStorage.getItem('@status_logado');
  /*if (status_logado === 'true'){
    this.setState({redirect: true});
  }*/
}

  changeEmail(event) {
    this.setState({ email: event.target.value }) 
  }



  changeSenha(event) {
    this.setState({ senha: event.target.value })
  }

  
  handleSubmit(event) {
    const self = this;

    event.preventDefault()
    if(this.state.email === "" | this.state.senha === ""){
      alert("Preencha todos os campos.")
    }
    else{
      const axios = require('axios')
      axios.post(api+'/login', {
        email: this.state.email,
        senha:this.state.senha
      },
      {
        headers: {
          Authorization: 'access-control-allow-origin'
        }
      })
      .then(function (response) {
        console.log(response.data.Status)
        if (response.data.Status === 'Fail'){
          alert("Usuário ou senha inválidos")
        }
        else{
          self.setState({redirect: true});
          localStorage.setItem('@status_logado', true);
        }
      })
    }

  }

  render() {
    return (
      <center>
      <form className="box_login">
                <h3 className="m-4">&#9830; Entrar Employees 	&#9830;</h3>

          <div>
                <div className="form-group">
                    <label className="m-4">&#8594; Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label className="m-4">&#8594; Senha</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Entrar</button>
                
                </div>
            </form>
            </center>
    )
  }
}

export default Login;
