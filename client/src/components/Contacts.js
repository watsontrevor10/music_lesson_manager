import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Heading, DataTable, Text, Box, Button, } from 'grommet'
import ContactForm from './ContactForm'
import Contact from './Contact'

const Contacts = (props) => {
  const [contacts, setContacts] = useState([])
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    axios.get(`/api/studios/${props.studio.id}/contacts`)
      .then(res => {
        setContacts(res.data)
      })
  }, [])

  const handleRefreshContacts = () => {
    axios.get(`/api/studios/${props.studio.id}/contacts`)
      .then(res => {
        setContacts(res.data)
        toggleContactForm()
      })
  }

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm)
  }

  return (
    <>
      {showContactForm ?
        <ContactForm toggleForm={toggleContactForm} studio={props.studio} add={handleRefreshContacts} />
        :
        <Box>
          <Heading level={3}>Contacts</Heading>
          <Box as='header'>
            <Button
              label='Add Contact'
              gap='small'
              onClick={toggleContactForm}
            />
          </Box>
          <Box>
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
              onClickRow={event => alert(JSON.stringify(event.datum, null, 2))}
            />
          </Box>
        </Box>
      }
    </>
  )
}

export default Contacts