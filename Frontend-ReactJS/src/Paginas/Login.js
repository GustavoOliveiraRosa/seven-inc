import React from 'react';
import './App.css';
import api from './Api';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
    this.state = { senha: '' }
    this.changeEmail = this.changeEmail.bind(this)
    this.changeSenha = this.changeSenha.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeEmail(event) {
    this.setState({ email: event.target.value })
    
  }


  changeSenha(event) {
    this.setState({ senha: event.target.value })
  }


  handleSubmit(event) {
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
          alert("Logado")
        }
      })
    }

  }

  render() {
    return (
      <form className="form_login" method="post" action=""> 

      <h1 className="titulo">Login Seven Inc</h1> 

      <p> 
        <label for="nome_login">Seu e-mail</label>
        <input  onChange={this.changeEmail} id="nome_login" name="nome_login" type="text" placeholder="email@email.com"/>
      </p>
       
      <p> 
        <label for="email_login">Sua senha</label>
        <input onChange={this.changeSenha} id="email_login" name="email_login" type="password" placeholder="sua senha" /> 
      </p>
       
      <p> 
        <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
        <label  for="manterlogado">Manter-me logado</label>
      </p>
       
      <p> 
        <input  onClick={this.handleSubmit} type="submit" value="Logar" /> 
      </p>

    </form>
    )
  }
}

export default Login;
