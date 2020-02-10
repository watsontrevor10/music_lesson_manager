import React from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Button, Form, FormField, Grid, Select } from 'grommet'

const ContactForm = (props) => {
  const { values, setValues, handleChange, handleSubmit, handleSelects } = useFormInput(submit)
  const statusOptions = ['Current', 'Potential', 'Former']

  const {
    first_name,
    last_name,
    phone,
    email,
    age,
    birthdate,
    parent_name,
    contact_type,
    contact_status,
    description,
  } = values

  function submit() {
    axios.post(`/api/studios/${props.studio.id}/contacts`, {
      first_name: first_name,
      last_name: last_name,
      phone: phone,
      email: email,
      age: age,
      birthdate: birthdate,
      parent_name: parent_name,
      contact_status: contact_status,
      contact_type: contact_type,
      description: description,
    })
      .then(
        props.toggleForm()
      )
  }

  return (
    <>
      <Form onSubmit={handleSubmit} pad='small'>
        <Grid
          columns={{
            count: 2,
            size: 'auto',
          }}
          gap='small'
        >
          <Box pad='small'>
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
          </Box>
          <Box pad='small'>
            <FormField
              label='Birthdate'
              name='birthdate'
              onChange={handleChange}
            />
            <FormField
              label='age'
              name='age'
              onChange={handleChange}
            />
            <FormField label='Status' htmlFor='select'>
              <Select
                id='select'
                name='contact_status'
                required
                value={contact_status}
                onChange={handleSelects}
                options={statusOptions}
              />
            </FormField>
            <FormField label='Type' htmlFor='select'>
              <Select
                label='Type'
                name='contact_type'
                value={contact_type}
                required
                options={['Student', 'Babysitter']}
                onChange={handleSelects}
              />
            </FormField>
            <FormField
              label='Parent Name'
              name='parent_name'
              onChange={handleChange}
            />
          </Box>
        </Grid>
        <Button
          label="Submit"
          type='submit'
          value='submit'
        />
        <Button
          label="Cancel"
          onClick={() => props.toggleForm()}
        />
      </Form>
    </>
  )
}


export default ContactForm