import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Box, Button, Grid, Heading, Layer, } from 'grommet'
import ContactForm from './ContactForm'
import Invoices from './Invoices'

const Contact = (props) => {

  return (
    <>
      <Grid
        columns={{
          size: 'auto',
          count: 2
        }}
      >
        <Box pad='medium'>
          <ContactForm
            contact={props.contact}
            delete={props.delete}
            goBack={props.goBack}
            toggle={props.toggleContact}
            refreshContacts={props.refreshContacts}
            // toggleForm={props.toggleForm}
          />
        </Box>
        <Box pad='medium'>
          <Invoices contact={props.contact} />
        </Box>
      </Grid>
    </>
  )
}

export default Contact