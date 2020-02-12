import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Heading, DataTable, Text, Box, Button, } from 'grommet'
import ContactForm from './ContactForm'
import Contact from './Contact'

const Contacts = (props) => {
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState({})
  const [showContactForm, setShowContactForm] = useState(false)
  const [showContact, setShowContact] = useState(false)

  useEffect(() => {
    axios.get(`/api/studios/${props.match.params.studio_id}/contacts`)
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

  const toggleContactComp = (e) => {
    setShowContact(!showContact)
    // event => JSON.stringify(event.datum, null, 2))
  }

  return (
    <>
      {showContact &&
        <Contact contact={contact} close={toggleContactComp} />}
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
                header: 'First Name',
              },
              {
                property: 'last_name',
                header: 'Last Name',
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
              onClickRow={event => setContact(event.datum), () => toggleContactComp()}
            />
          </Box>
        </Box>
      }
    </>
  )
}

export default Contacts