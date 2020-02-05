import React, { useState } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Button, Form, FormField, Grid, Select } from 'grommet'

const ContactForm = (props) => {
  const { values, setValues, handleChange, handleSubmit } = useFormInput(submit)
  const statusOptions = ['Current', 'Potential', 'Former']
  const [initStatus, setInitStatus] = useState('')
  // const [firstName, setFirstName] = useState('')
  // const [lastName, setLastName] = useState('')
  // const [phone, setPhone] = useState('')
  // const [email, setEmail] = useState('')
  // const [age, setAge] = useState('')
  // const [birthdate, setBirthdate] = useState('')
  // const [parentName, setParentName] = useState('')
  // const [type, setType] = useState('')
  // const [description, setDescription] = useState('')
  const {
    first_name,
    last_name,
    phone,
    email,
    age,
    birthdate,
    parent_name,
    type,
    status,
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
                name='status'
                required
                value={initStatus}
                onChange={event => {setInitStatus(event.value)}}
                options={statusOptions}
              />
            </FormField>
            <FormField
              label='Parent Name'
              name='parent_name'
              onChange={handleChange}
            />
            <Select
              label='Type'
              name='type'
              required
              options={['Student', 'Babysitter']}
              onChange={handleChange}
            />
          </Box>
        </Grid>
        <Button
          label="Submit"
          type='submit'
          value='submit'
        />
      </Form>
    </>
  )
}


export default ContactForm