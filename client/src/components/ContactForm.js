import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Button, Form, FormField, Grid, Select, MaskedInput } from 'grommet'

const ContactForm = (props) => {
  const { values, setValues, handleChange, handleSubmit, handleSelects } = useFormInput(submit)
  const [contact, setContact] = useState(props.contact ? props.contact : null)
  const statusOptions = ['Current', 'Potential', 'Former']

  useEffect(() => {
    if (contact) {
      setValues({ ...contact })
    }
  }, [])

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
    amount_per_hour,
    lesson_duration,
  } = values

  function submit() {
    const newContact =
    {
      first_name,
      last_name,
      phone,
      email,
      age,
      birthdate,
      parent_name,
      contact_status,
      contact_type,
      description,
      amount_per_hour,
      lesson_duration,
    }

    if (contact) {
      axios.patch(`/api/contacts/${contact.id}`, newContact)
        .then(res => {
          props.add()
          setContact(null)
        })
    } else {
      axios.post(`/api/contacts`, newContact)
        .then(res => {
          props.add()
        }
        )
    }
  }

  if (contact) {
    // Edit Form
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
                value={first_name}
                {...first_name}
                onChange={handleChange}
              />
              <FormField
                label='Last Name'
                name='last_name'
                value={last_name}
                {...last_name}
                onChange={handleChange}
              />
              <FormField
                label='Email'
                name='email'
                value={email}
                {...email}
                onChange={handleChange}
              />
              <FormField
                label='Phone'
                name='phone'
                value={phone}
                {...phone}
                onChange={handleChange}
              />
              <FormField
                label='Cost per Lesson'
                name='amount_per_hour'
                value={amount_per_hour}
                {...amount_per_hour}
                onChange={handleChange}
              />
              <FormField
                label='Lesson Duration'
                name='lesson_duration'
                value={lesson_duration}
                {...lesson_duration}
                onChange={handleChange}
              />
            </Box>
            <Box pad='small'>
              <FormField
                label='Birthdate'
                name='birthdate'
                value={birthdate}
                {...birthdate}
                onChange={handleChange}
              />
              <FormField
                label='age'
                name='age'
                value={age}
                {...age}
                onChange={handleChange}
              />
              <FormField label='Status' htmlFor='select'>
                <Select
                  id='select'
                  name='contact_status'
                  required
                  value={contact_status}
                  {...contact_status}
                  onChange={handleSelects}
                  options={statusOptions}
                />
              </FormField>
              <FormField label='Type' htmlFor='select'>
                <Select
                  label='Type'
                  name='contact_type'
                  value={contact_type}
                  {...contact_type}
                  required
                  options={['Student', 'Babysitter']}
                  onChange={handleSelects}
                />
              </FormField>
              <FormField
                label='Parent Name'
                name='parent_name'
                value={parent_name}
                {...parent_name}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Button
            label="Update"
            type='submit'
            value='submit'
          />
          <Button
            label="Cancel"
            onClick={() => props.goBack()}
          />
          <Button
            label="Delete"
            onClick={() => props.delete()}
          />
        </Form>
      </>
    )
  } else {
    // Add Form
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
              >
                <MaskedInput
                  name="email"
                  mask={[
                    { regexp: /^[\w\-_.]+$/, placeholder: "example" },
                    { fixed: "@" },
                    { regexp: /^[\w]+$/, placeholder: "my" },
                    { fixed: "." },
                    { regexp: /^[\w]+$/, placeholder: "com" }
                  ]}
                />
              </FormField>
              <FormField
                label='Phone'
                name='phone'
                onChange={handleChange}
              />
              <FormField
                label='Cost per Lesson'
                name='amount_per_hour'
                onChange={handleChange}
              />
              <FormField
                label='Lesson Duration'
                name='lesson_duration'
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
}


export default ContactForm