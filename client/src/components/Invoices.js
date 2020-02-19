import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Box, Heading } from 'grommet'

const Invoices = (props) => {
  const [invoices, setInvoices] = useState([])

  useEffect(() => {
    axios.get(`/api/contacts/${props.contact.id}/invoices`)
      .then(res => {
        setInvoices(res.data)
      })
  }, [])

  return (
    <>
      {invoices.map(invoice => (
        <Heading>{invoice.amount}</Heading>
      ))}
    </>
  )
}

export default Invoices