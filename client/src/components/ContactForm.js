import React from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Form, FormField, TextArea, Select } from 'grommet'

const ContactForm = (props) => {
  const { values, setValues, handleChange, handleSubmit } = useFormInput(submit)
  const { 
    first_name, 
    last_name, 
    phone, 
    email, 
    age,
    birthdate, 
    parent_name, 
    status, 
    type, 
    description, 
  } = values

  function submit() {
    axios.post('/api/studios', {
      first_name: first_name, 
      last_name: last_name, 
      phone: phone, 
      email: email, 
      age: age, 
      birthdate: birthdate,
      parent_name: parent_name,
      status: status, 
      type: type,
      description: description,
    })
      .then(
        // props.toggleForm()
      )
  }

  return (
    <>
      <Box>
        <Form onSubmit={handleSubmit}>
          <FormField 
            label='First Name'
            name='first_name'
            required
            onChange={handleChange}
          />
          <FormField 
            label='Last Name'
            name='last_name'
            required
            onChange={handleChange}
          />
          <FormField 
            label='Email'
            name='email'
            onChange={handleChange}
          />
          <FormField 
            label='Phone'
            name='phone'
            onChange={handleChange}
          />
          <FormField 
            label='age'
            name='age'
            onChange={handleChange}
          />
          <Select 
            id='select'
            label='Status'
            name='status'
            required
            // placeholder='Status'
            // value={values.status}
            options={['Current', 'Potential', 'Former']}
            onChange={({ option }) => setValues(option)}
          />
          <FormField 
            label='Parent Name'
            name='parent_name'
            onChange={handleChange}
          />
          <FormField 
            label='Type'
            name='type'
            required
            onChange={handleChange}
          />
          <FormField 
            label='Birthdate'
            name='birthdate'
            onChange={handleChange}
          />
        </Form>
      </Box>
    </>
  )
}


export default ContactForm