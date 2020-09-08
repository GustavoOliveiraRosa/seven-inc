import React, { Component } from 'react';

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
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.email}
          onChange={this.changeEmail}
        />
        <input
          type="password"
          value={this.state.senha}
          onChange={this.changeSenha}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Login;
