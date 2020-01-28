import React, { useState } from 'react'
import { Form, FormField, Button, Layer } from 'grommet'
import useFormInput from '../hooks/useFormInput'
import axios from 'axios'

const StudioForm = (props) => {
  const { values, setValues, handleChange, handleSubmit } = useFormInput(submit)
  const { name } = values

  function submit() {
    axios.post('/api/studios', {name: name})
      .then(
        props.toggleForm()
      )
  }

  return (
    <Layer 
      animation='fadeIn'
    >
      {/* <Heading>Studio Name</Heading> */}
      <Form onSubmit={handleSubmit}>
        <FormField 
          name='name'
          label='Studio Name'
          onChange={handleChange}
          value={name}
        /> 
        <Button primary type="submit" label='Submit' />
      </Form>
    </Layer>
  )
}

export default StudioForm