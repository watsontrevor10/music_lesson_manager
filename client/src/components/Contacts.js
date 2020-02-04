import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { DataTable, Text, } from 'grommet'

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
      <h3>Students</h3>
      {/* {contacts.map(contact => ( */}
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
        >
          {/* <h4>{contact.first_name} {contact.last_name}</h4>
          <p>{contact.email}</p> */}
        </DataTable>
        {/* ))} */}
    </>
  )
}

export default Contacts