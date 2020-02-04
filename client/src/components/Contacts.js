import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DataTable, Text, Box, } from 'grommet'
import ContactForm from './ContactForm'

const Contacts = (props) => {
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    axios.get(`/api/studios/22/contacts`)
      .then(res => {
        setContacts(res.data)
      })
  }, [])

  return (
    <>
      <Box>
        <ContactForm />
      </Box>
      <Box direction='row-responsive'>
        {/* <h3>Students</h3> */}
        <DataTable columns={[
          {
            property: 'first_name',
            header: <Text>Name</Text>,
          },
          {
            property: 'email',
            header: 'Email',
          },
          {
            property: 'phone',
            header: 'Phone',
          },
          {
            property: 'status',
            header: 'Status',
          }
        ]}
          data={contacts}
        />
      </Box>
    </>
  )
}

export default Contacts