import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
import { Button, Form, Heading, Box, TextInput, FormField, Layer } from 'grommet'
import axios from 'axios'
import StudioForm from './StudioForm'

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', studio_name: '' };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation) {
      handleRegister({ email, password, passwordConfirmation, }, history);
    } else
      alert('Passwords Do Not Match!')
  }

  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }

  // newStudioForm = () => {
  //   const { studio_name } = this.state
  //   axios.post('/api/studios', {
  //     name: studio_name,
  //   })
  //     .then(res => {
  //       this.setState({ studio_name: studio_name })
  //       // props.history.push('/')
  //     })
  //     .catch(res => {
  //       // props.history.push('/')
  //     }
  //     )
  // }


  render() {
    const { email, password, passwordConfirmation, studio_name } = this.state;

    return (
      <Box basic>
        <Heading as='h1' textAlign='center'>Register</Heading>
        <Form onSubmit={this.handleSubmit} margin='small'>
          <FormField>
            <TextInput
              label="Email"
              required
              autoFocus
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
          <FormField>
            <TextInput
              label="Password Confirmation"
              required
              name='passwordConfirmation'
              value={passwordConfirmation}
              placeholder='Password Confirmation'
              type='password'
              onChange={this.handleChange}
            />
          </FormField>
          {/* <FormField>
            <TextInput
              label="Studio Name"
              placeholder="Studio Name"
              required
              name='studio_name'
              value={studio_name}
              onChange={this.handleChange}
            />
          </FormField> */}
          <Button primary type='submit' label='Submit' />
        </Form>
      </Box>
    )
  }
}

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <>
        <AuthConsumer>
          {auth => <Register {...this.props} auth={auth} />}
        </AuthConsumer>
      </>
    )
  }
}