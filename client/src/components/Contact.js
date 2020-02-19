import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Box, Button, Heading, Layer, } from 'grommet'

const Contact = (props) => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    axios.get(`/api/contacts/${props.contact.id}/invoices`)
      .then(res => {
        setInvoices(res.data)
      })
  }, [])

  return (
    <>
      <Box>
        <Button
          label='Back'
          onClick={props.goBack}
        />
      </Box>   
    </>
  )
}

export default Contact