import React from 'react';
import { AuthConsumer, } from "../providers/AuthProvider";
// import { Button, Form, Segment, Header, } from 'semantic-ui-react';
import { Button, Form, TextInput, Heading, Box } from 'grommet'

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
          <TextInput
            label="Email"
            autoFocus
            required         
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <TextInput
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          {/* <br/> */}
          <div textAlign='center' basic>
            <Button primary type='submit' margin='small'>Submit</Button>
          </div>
        </Form>
      </Box>
    )
  }
}

export default class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}
