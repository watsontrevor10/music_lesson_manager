import React from 'react'
import { Form, FormField, Button, Heading } from 'grommet'
import useFormInput from '../hooks/useFormInput'
import axios from 'axios'

const StudioForm = (props) => {
  const { values, handleChange, handleSubmit } = useFormInput(submit)
  const { name } = values

  function submit() {
    axios.post('/api/studios', {
      name: name,
    })
      .then(res => {
        props.history.push('/')
      })
      .catch(res => {
        props.history.push('/')
      } 
      )
  }

  return (
    <div>
      <Heading>Studio Name</Heading>
      <Form onSubmit={handleSubmit}>
        <FormField 
          name='name'
          label='Studio Name'
          onChange={handleChange}
          value={name}
        /> 
        <Button primary type="submit" label='Submit' />
      </Form>
    </div>
  )
}

export default StudioForm