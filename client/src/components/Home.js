import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Contacts from './Contacts'
import ContactForm from './ContactForm'
import StudioForm from './StudioForm'
import { Heading, Header, Box, Grid, Button, Select } from 'grommet'

const Home = () => {
  const [studioName, setStudioName] = useState([])
  const [currentStudio, setCurrentStudio] = useState(studioName[0])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    axios.get('/api/studios')
      .then(res => {
        setStudioName(res.data)
      })
  }, [])

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  const showStudioForm = () => {
    if (showForm) {
      return (
        <StudioForm toggleForm={toggleForm} />
      )
    }
  }

  const studioValues = studioName.map(name => (
    name.name
  ))

  const displayContacts = () => {
    if (studioName.length > 0) {
      return (
        <Contacts studio={studioName[0]} />
      )
    }
  }

  return (
    <>
      <Box border>
        <Header alignSelf='center'>
          {showStudioForm()}
          <Select
            options={studioValues}
            value={currentStudio}
            defaultValue={currentStudio}
            onChange={event => setCurrentStudio(event.value)}
          />

        </Header>
      </Box>
      <Grid
        columns={{ count: 2, size: 'auto' }}
        gap='small'
      >
        <Box pad='medium' border>
          {displayContacts()}
        </Box>
      </Grid>
    </>
  )
}

export default Home;