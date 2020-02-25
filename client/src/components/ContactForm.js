import React, { useState, useEffect, } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Button, Form, FormField, Grid, Heading, Select, MaskedInput } from 'grommet'

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
          setContact(res.data)
          alert('Contact Updated')
        })
    } else {
      axios.post(`/api/contacts`, newContact)
        .then(res => {
          props.refreshContacts()
          props.toggleForm()
        }
        )
    }
  }

  if (contact) {
    // Edit Form
    return (
      <>
        <Box gap='small'>
          <Form onSubmit={handleSubmit} pad='medium'>
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
                  type='email'
                  value={email}
                  {...email}
                  onChange={handleChange}
                />
                <FormField
                  label='Phone'
                  name='phone'
                  type='tel'
                  value={phone}
                  {...phone}
                  onChange={handleChange}
                />
                <FormField
                  label='Cost per Lesson'
                  name='amount_per_hour'
                  type='number'
                  value={amount_per_hour}
                  {...amount_per_hour}
                  onChange={handleChange}
                />
                <FormField
                  label='Lesson Duration'
                  htmlFor='select'
                >
                  <Select
                    id='select_duration'
                    name='lesson_duration'
                    onChange={handleSelects}
                    value={lesson_duration}
                    {...lesson_duration}
                    options={[15, 30, 45, 60]}
                  />
                </FormField>
              </Box>
              <Box pad='small'>
                <FormField
                  label='Birthdate'
                  name='birthdate'
                  type='date'
                  value={birthdate}
                  {...birthdate}
                  onChange={handleChange}
                />
                <FormField
                  label='age'
                  name='age'
                  type='number'
                  value={age}
                  {...age}
                  onChange={handleChange}
                />
                <FormField label='Status' htmlFor='select'>
                  <Select
                    id='select_status'
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
                    id='select_type'
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
            <Box gap='small' direction='row-responsive'>
              <Button
                label="Update"
                type='submit'
                value='submit'
                size='small'
              />
              <Button
                label="Back"
                onClick={() => props.refreshContacts()}
                size='small'
              />
              <Button
                label="Delete"
                size='small'
                onClick={() => props.delete()}
              />

            </Box>
          </Form>
        </Box>
      </>
    )
  } else {
    // Add Form
    return (
      <>
        <Box>
          <Box pad='small'>
            <Heading level={3}>Add Contact</Heading>
          </Box>
          <Form onSubmit={handleSubmit} pad='medium'>
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
                  type='email'
                  onChange={handleChange}
                />
                <FormField
                  label='Phone'
                  name='phone'
                  type='tel'
                  onChange={handleChange}
                />
                <FormField
                  label='Cost per Lesson'
                  name='amount_per_hour'
                  type='number'
                  onChange={handleChange}
                />
                <FormField
                  label='Lesson Duration'
                  htmlFor='select'
                >
                  <Select
                    id='select_add_duration'
                    name='lesson_duration'
                    onChange={handleSelects}
                    value={lesson_duration}
                    {...lesson_duration}
                    options={[15, 30, 45, 60]}
                  />
                </FormField>
              </Box>
              <Box pad='small'>
                <FormField
                  label='Birthdate'
                  name='birthdate'
                  type='date'
                  onChange={handleChange}
                />
                <FormField
                  label='age'
                  name='age'
                  type='number'
                  onChange={handleChange}
                />
                <FormField label='Status' htmlFor='select'>
                  <Select
                    id='select_add_status'
                    name='contact_status'
                    required
                    value={contact_status}
                    onChange={handleSelects}
                    options={statusOptions}
                  />
                </FormField>
                <FormField label='Type' htmlFor='select'>
                  <Select
                    id='select_add_type'
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
        </Box>
      </>
    )
  }
}


export default ContactForm