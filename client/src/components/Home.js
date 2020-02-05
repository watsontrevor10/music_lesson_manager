import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Contacts from './Contacts'
import ContactForm from './ContactForm'
import StudioForm from './StudioForm'
import { Heading, Header, Box, Grid, Button, } from 'grommet'

const Home = () => {
  const [studioName, setStudioName] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    axios.get('/api/studios')
      .then(res => {
        setStudioName(res.data)
        if (res.data.length < 1) {
          toggleForm()
        }
      })
  }, [])

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm)
  }

  const showStudioForm = () => {
    if (showForm) {
      return (
        <StudioForm toggleForm={toggleForm} />
      )
    }
  }

  return (
    <>
      <Box border>
        <Header alignSelf='center'>
          {showStudioForm()}
          {studioName.map(name => (
            <Heading>{name.name}</Heading>
          ))}
        </Header>
      </Box>
      <Grid
        columns={{ count: 2, size: 'auto' }}
        gap='small'
      >
        <Box pad='small' border>
          <Button
            label='Add Contact'
            onClick={toggleContactForm}
          />
          {showContactForm ? <ContactForm toggleForm={toggleContactForm} id={studioName.id} /> : <Contacts studio={studioName} />}
        </Box>
      </Grid>
    </>
  )
}

export default Home;