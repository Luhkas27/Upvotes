import React, { Component } from 'react';

import { Container, Logo, Form, Input, Button } from './styles';

import IMGLogo from '../../assets/images/logo.svg';

class Login extends Component {
  state = {
    username: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    const { username } = this.state;

    if (!username.length) return;

    localStorage.setItem('@Upvote:username', username);

    this.props.history.push('/posts');
  };

  handleInputChange = e => {
    this.setState({ username: e.target.value });
  };

  render() {
    return (
      <Container>
        <Logo src={IMGLogo} alt="Logo" />
        <Form onSubmit={this.handleSubmit}>
          <Input
            value={this.state.username}
            onChange={this.handleInputChange}
            type="text"
            placeholder="Nome de usuário"
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
