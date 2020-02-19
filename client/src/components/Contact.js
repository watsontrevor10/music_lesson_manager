import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, Grid, Heading, Layer, } from 'grommet'
import ContactForm from './ContactForm'
import Invoices from './Invoices'

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


  return (
    <>
      <Grid
        columns={{
          size: 'auto',
          count: 2
        }}
      >
        <Box>
          <ContactForm
            contact={props.contact}
            goBack={props.goBack}
          />
        </Box>
        <Box>
          <Heading>Invoices</Heading>
          <Invoices contact={props.contact} /> 
        </Box>
      </Grid>
    </>
  )
}

export default Contact