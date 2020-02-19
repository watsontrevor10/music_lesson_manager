import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Select, } from 'grommet'


const Studios = () => {
  const [studios, setStudios] = useState([])
  const [currentStudio, setCurrentStudio] = useState({})

  // useEffect(() => {
  //   axios.get('/api/studios')
  //   .then( res => {
  //     setStudios(res.data)
  //     console.log('SetStudios')
  //     firstStudio()
  //     console.log('Trigger first Studio')
  //   })
  // }, [])

  useEffect(() => {
    async function getStudios() {
      await axios.get('/api/studios')
        .then(res => {
          setStudios(res.data)
          setCurrentStudio(studios[0])
        })
    }
    getStudios()
  }, [])

  const studioValues = studios.map(name => (
    name.name
  ))

  const handleChange = (e) => {
    debugger
    setCurrentStudio(e)
  }

  return (
    <>
      <Box>
        <Select
          options={studioValues}
          value={studioValues}
          defaultValue={studioValues[0]}
        />

      </Box>

    </>
  )
}

export default Studios 