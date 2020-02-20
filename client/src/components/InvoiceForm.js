import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Form, FormField, Button, Heading } from 'grommet'

const InvoiceForm = (props) => {
  const { values, setValues, handleChange, handleSubmit, handleSelects } = useFormInput(submit)
  const [invoice, setInvoice] = useState(props.invoice ? props.invoice : null)

  useEffect(() => {
    if (invoice) {
      setValues({ ...invoice })
    }
  }, [])

  const {
    amount,
    date_sent,
    date_paid,
    notes,
  } = values

  function submit() {
    const newInvoice = {
      amount,
      date_sent,
      date_paid,
      notes,
    }

    if (invoice) {
      axios.patch(`/api/contacts/${props.contact_id}/invoices/${invoice.id}`, newInvoice)
        .then(res => {
          props.updateInvoices()
          setInvoice(null)
        })
    } else {
      axios.post(`/api/contacts/${props.contact_id}/invoices`, newInvoice)
        .then(res => {
          props.updateInvoices()
        })
    }
  }

  if (invoice) {
    return (
      <>
        <Box>
          <Heading level={3}>Edit Invoice</Heading>
        </Box>
        <Form onSubmit={handleSubmit}>
          <Box pad='medium'>
            <FormField
              label='Amount'
              name='amount'
              type='currency'
              value={amount}
              {...amount}
              onChange={handleChange}
            />
            <FormField
              label='Date Sent'
              name='date_sent'
              type='date'
              value={date_sent}
              {...date_sent}
              onChange={handleChange}
            />
            <FormField
              label='Date Paid'
              name='date_paid'
              type='date'
              value={date_paid}
              {...date_paid}
              onChange={handleChange}
            />
            <FormField
              label='Notes'
              name='notes'
              value={notes}
              {...notes}
              onChange={handleChange}
            />
          </Box>
          <Box pad='medium'>
            <Button
              label='Save'
              type='submit'
              value='submit'
              pad='small'
            />
            <Button
              label='Cancel'
              onClick={() => props.toggle()}
              pad='small'
            />
            <Button
              label='Delete'
              // onClick={() => props.toggle()}
              pad='small'
            />
          </Box>
        </Form>
      </>
    )
  } else {
    return (
      <>
        <Box>
          <Heading level={3}>Add Invoice</Heading>
        </Box>
        <Form onSubmit={handleSubmit}>
          <Box pad='medium'>
            <FormField
              label='Amount'
              name='amount'
              onChange={handleChange}
            />
            <FormField
              label='Date Sent'
              name='date_sent'
              type='date'
              onChange={handleChange}
            />
            <FormField
              label='Date Paid'
              name='date_paid'
              type='date'
              onChange={handleChange}
            />
            <FormField
              label='Notes'
              name='notes'
              onChange={handleChange}
            />
          </Box>
          <Box pad='medium'>
            <Button
              label='Save'
              type='submit'
              value='submit'
              pad='small'
            />
            <Button
              label='cancel'
              onClick={() => props.toggle()}
              pad='small'
            />
          </Box>
        </Form>
      </>
    )
  }
}


export default InvoiceForm