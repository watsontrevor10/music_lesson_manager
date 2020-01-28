import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Contacts = (props) => {
  const [contacts, setContacts] = useState([])
  // const firstStudio = contacts.findIndex(0)

  console.log(contacts.find([0]))

  useEffect(() => {
    axios.get(`/api/studios/${props.studio.id}/contacts`)
      .then(res => {
        setContacts(res.data)
      })
  })

  return (
    <>
      <h3>Students</h3>
      {contacts.map(contact => (
        <h4>{contact.first_name}</h4>
      ))}
    </>
  )
}

export default Contacts