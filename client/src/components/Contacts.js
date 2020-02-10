import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DataTable, Text, Box, Button, } from 'grommet'
import ContactForm from './ContactForm'

const Contacts = (props) => {
  const [contacts, setContacts] = useState([])
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    axios.get(`/api/studios/${props.studio.id}/contacts`)
      .then(res => {
        setContacts(res.data)
        console.log('res.data' + res.data)
      })
  }, [])

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm)
  }

  return (
    <>
      {showContactForm ?
        <ContactForm toggleForm={toggleContactForm} studio={props.studio} />
        :
        <Box direction='row-responsive'>
          <Button
            label='Add Contact'
            onClick={toggleContactForm}
          />
          <DataTable key={contacts.id} columns={[
            {
              property: 'first_name',
              header: <Text>First Name</Text>,
            },
            {
              property: 'last_name',
              header: <Text>Last Name</Text>,
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
              property: 'contact_status',
              header: 'Status',
            }
          ]}
            data={contacts}
          />
        </Box>
      }
    </>
  )
}

export default Contacts