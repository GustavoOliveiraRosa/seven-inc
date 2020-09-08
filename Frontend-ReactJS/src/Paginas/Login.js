import React from 'react';
import './App.css';


class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = { email: '' }
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
    alert(this.state.email+this.state.senha)
    event.preventDefault()
  }

  render() {
    return (
      <form className="form_login" method="post" action=""> 

      <h1 className="titulo">Login Seven Inc</h1> 

      <p> 
        <label for="nome_login">Seu e-mail</label>
        <input id="nome_login" name="nome_login" required="required" type="text" placeholder="email@email.com"/>
      </p>
       
      <p> 
        <label for="email_login">Sua senha</label>
        <input id="email_login" name="email_login" required="required" type="password" placeholder="sua senha" /> 
      </p>
       
      <p> 
        <input type="checkbox" name="manterlogado" id="manterlogado" value="" /> 
        <label  for="manterlogado">Manter-me logado</label>
      </p>
       
      <p> 
        <input type="submit" value="Logar" /> 
      </p>

    </form>
    )
  }
}

export default Login;
