import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contacts from './Contacts'
import StudioForm from './StudioForm';
import { Heading, Header, Box, Grid } from 'grommet'

const Home = () => {
  const [studioName, setStudioName] = useState([])
  const [showForm, setShowForm] = useState(false)

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

  const showStudioForm = () => {
    if (showForm) {
      return (
        <StudioForm toggleForm={toggleForm} />
      )
    }
  }

  return (
    <>
      <Grid
        rows={['small', 'small']}
        columns={['small', 'small']}
        gap='xsmall'
        areas={[
          { name: 'header', start: [0, 0], end: [1, 0] },
          { name: 'contacts', start: [0, 1], end: [0, 1] },
        ]}
      >
        <Box gridArea='header'>
          <Header alignSelf='center'>
            {showStudioForm()}
            {studioName.map(name => (
              <Heading>{name.name}</Heading>
            ))}
          </Header>
        </Box>
        <Box gridArea='contacts' direction='row' pad='small'>
          <Contacts studio={studioName} />
        </Box>
      </Grid>
    </>
  )
}

export default Home;