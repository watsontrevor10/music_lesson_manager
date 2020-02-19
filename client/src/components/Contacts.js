import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Heading, DataTable, Box, Button, } from 'grommet'
import ContactForm from './ContactForm'

const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [contact, setContact] = useState(null)
  const [showContactForm, setShowContactForm] = useState(false)

  useEffect(() => {
    axios.get(`/api/contacts`)
      .then(res => {
        setContacts(res.data)
        setContact(null)
      })
  }, [])

  const handleRefreshContacts = () => {
    axios.get(`/api/contacts`)
      .then(res => {
        setContacts(res.data)
        setContact(null)
        toggleContactForm()
      })
  }

  const handleDelete = () => {
    axios.delete(`/api/contacts/${contact.id}`)
      .then(res => {
        setContacts(contacts.filter(c => c.id !== contact.id))
        toggleContactForm()
      })
  }

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm)
  }

  const toggleContactComp = (e) => {
    setContact(e)
    setShowContactForm(!showContactForm)
  }

  return (
    <>
      {showContactForm ?
        <ContactForm toggleForm={toggleContactForm} add={handleRefreshContacts} delete={handleDelete} contact={contact} />
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
            <DataTable key={contacts.id} 
            columns={[
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
              },
              {
                property: 'contact_type',
                header: 'Type',
              },
              {
                property: 'amount_per_hour',
                header: 'Cost per Lesson',
              },
              {
                property: 'lesson_duration',
                header: 'Lesson Duration',
              },
            ]}
              data={contacts}
              sortable
              onClickRow={event => toggleContactComp(event.datum)}
            />
          </Box>
        </Box>
      }
    </>
  )
}

export default Contacts