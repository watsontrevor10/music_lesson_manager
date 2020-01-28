import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Contacts from './Contacts'
import StudioForm from './StudioForm';
import { Heading, Box } from 'grommet'

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
      {showStudioForm()}
      {studioName.map(name => (
        <Heading>{name.name}</Heading>
      ))}
      <Box>
        <Contacts studio={studioName} />
      </Box>
    </>
  )

}


export default Home;