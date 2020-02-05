import React, { useState } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Button, Form, FormField, Grid, Select } from 'grommet'

const ContactForm = (props) => {
  const { values, setValues, handleChange, handleSubmit, handleSelects } = useFormInput(submit)
  const statusOptions = ['Current', 'Potential', 'Former']
  // const [status, setStatus] = useState('')
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
    axios.post(`/api/studios/${props.id}/contacts`, {
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
        props.toggleForm()
      )
  }

  // const handleChange = (e) => {
  //   e.preventDefault()
  //   setFirstName(e.target.value)
  //   setLastName(e.target.value)
  //   setPhone(e.target.value)
  //   setEmail(e.target.value)
  //   setAge(e.target.value)
  //   setBirthdate(e.target.value)
  //   setParentName(e.target.value)
  //   setStatus(e.target.value)
  //   setType(e.target.value)
  //   setDescription(e.target.value)
  // }

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
                value={status}
                onChange={handleSelects}
                options={statusOptions}
              />
            </FormField>
            <FormField label='Type' htmlFor='select'>
              <Select
                label='Type'
                name='type'
                value={type}
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
      </Form>
    </>
  )
}


export default ContactForm