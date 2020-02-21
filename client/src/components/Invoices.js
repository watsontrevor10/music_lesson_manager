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
      <Box pad='medium' gap='small'>
        <Button
          label='Add Invoice'
          fill='false'
          onClick={toggleAddForm}
        />
      </Box>
      <Box direction='row-responsive' gap='small'>
        {invoices.map(invoice => (
          <Box
            pad='large'
            elevation='small'
            round
            background={{ color: "light-3", opacity: "strong" }}
          >
            <Heading level={4}>Invoice Amount: {invoice.amount}</Heading>
            <p>Date Sent: {invoice.date_sent}</p>
            <p>Date Paid: {invoice.date_paid}</p>
            <p>Notes: {invoice.notes}</p>
            <Button
              label='Edit'
              justify='center'
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