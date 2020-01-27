import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, TextInput, Heading, Box, FormField } from 'grommet'

class Login extends React.Component {
  state = { email: '', password: '' }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  render() {
    const { email, password, } = this.state;

    return (
      <Box pad='small' align='center' alignSelf='center'>
        <Heading as='h1' textAlign='center'>Login</Heading>
        <Form onSubmit={this.handleSubmit}>
          <FormField>
            <TextInput
              label="Email"
              autoFocus
              required
              name='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </FormField>
          <FormField>
            <TextInput
              label="Password"
              required
              name='password'
              value={password}
              placeholder='Password'
              type='password'
              onChange={this.handleChange}
            />
          </FormField>
          <Button primary type='submit' margin='small' label='Submit' />
        </Form>
      </Box>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
