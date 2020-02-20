import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Heading, Layer } from 'grommet'
import InvoiceForm from './InvoiceForm'

const Invoices = (props) => {
  const [invoices, setInvoices] = useState([])
  const [invoice, setInvoice] = useState(false)
  const [invoiceModal, setInvoiceModal] = useState(false)

  useEffect(() => {
    axios.get(`/api/contacts/${props.contact.id}/invoices`)
      .then(res => {
        setInvoices(res.data)
      })
  }, [])

  const updateInvoices = () => {
    axios.get(`/api/contacts/${props.contact.id}/invoices`)
      .then(res => {
        setInvoices(res.data)
        toggleInvoiceModal()
      })
  }

  const toggleInvoiceModal = (e) => {
    setInvoice(e)
    setInvoiceModal(!invoiceModal)
  }

  const toggleAddForm = () => {
    setInvoiceModal(!invoiceModal)
  }

  function showInvoiceModal() {
    if (invoiceModal) {
      return (
        <Layer
          position='right'
          full='vertical'
          modal
          onClickOutside={toggleInvoiceModal}
          onEsc={toggleInvoiceModal}
        >
          <InvoiceForm 
            contact_id={props.contact.id}
            invoice={invoice} 
            toggle={toggleInvoiceModal} 
            updateInvoices={updateInvoices}
          />
        </Layer>
      )
    }
  }

  return (
    <>
      <Box>
        <Button
          label='Add Invoice'
          onClick={toggleAddForm}
        />
      </Box>
      <Box direction='row-responsive'>
        {invoices.map(invoice => (
          <Box
            pad='large'
            background={{ color: "light-2", opacity: "strong" }}
          >
            <Heading level={4}>{invoice.amount}</Heading>
            <p>{invoice.date_sent}</p>
            <p>{invoice.date_paid}</p>
            <p>{invoice.notes}</p>
            <Button
              label='Edit'
              onClick={() => toggleInvoiceModal(invoice)}
            />
          </Box>
        ))}
      </Box>
      {showInvoiceModal()}
    </>
  )
}

export default Invoices