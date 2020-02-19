import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Box, Button, Heading, Layer, } from 'grommet'
import ContactForm from './ContactForm'

const Contact = (props) => {
  const [invoices, setInvoices] = useState([])

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
  } = props.contact

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
      <Box>
        <Heading level={3}>{first_name} {last_name}</Heading>
        <ContactForm 
          contact={props.contact}
          goBack={props.goBack}
        />
      </Box>   
    </>
  )
}

export default Contact