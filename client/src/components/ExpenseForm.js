import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Button, Form, FormField, Heading, Grid, Select, } from 'grommet'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const ExpenseForm = (props) => {
  const { values, setValues, handleChange, handleSubmit, handleSelects } = useFormInput(submit)
  const [expense, setExpense] = useState(props.expense ? props.expense : null)
  const [startDate, setStartDate] = useState(new Date())
  const categoryOptions = ['Travel', 'Materials', 'Recital', 'Other']

  useEffect(() => {
    if (expense) {
      setValues({ ...expense })
    }
  }, [])

  const {
    expense_category,
    expense_amount,
    date,
    purpose,
    notes,
  } = values

  function submit() {
    const newExpense = {
      expense_category,
      expense_amount,
      date,
      purpose,
      notes,
    }

    if (expense) {
      axios.patch(`/api/expenses/${expense.id}`, newExpense)
        .then(res => {
          props.updateExpense()
          setExpense({})
        })
    } else {
      axios.post('/api/expenses', newExpense)
        .then(res => {
          props.updateExpense()
        })
    }
  }

  const handleDateChange = (date) => {
    setStartDate(date)
  }

  if (expense) {
    return (
      <>
        <Box>
          <Heading level={3}>Add Expense</Heading>
        </Box>
        <Form onSubmit={handleSubmit} pad='small'>
          <Grid
            gap='small'
          >
            <Box pad='small'>
              <FormField label='Expense Category' htmlFor='select'>
                <Select
                  id='select'
                  name='expense_category'
                  value={expense_category}
                  {...expense_category}
                  onChange={handleSelects}
                  options={categoryOptions}
                />
              </FormField>
              <FormField
                label='Amount'
                name='expense_amount'
                type='currency'
                value={expense_amount}
                {...expense_amount}
                onChange={handleChange}
              />
              <FormField
                label='Date'
                name='date'
                value={date}
                {...date}
                onChange={handleChange}
              />
              <FormField
                label='Purpose'
                name='purpose'
                value={purpose}
                {...purpose}
                onChange={handleDateChange}
              />
              <FormField
                label='Notes'
                name='notes'
                value={notes}
                {...notes}
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Button
            label='Update'
            type='submit'
            value='submit'
            gap='small'
          />
          <Button
            label='Cancel'
            onClick={() => props.toggle()}
            gap='small'
          />
          <Button
            label='Delete'
            onClick={() => props.deleteExpense()}
            gap='small'
          />
        </Form>
      </>
    )
  } else {
    return (
      <>
        <Box>
          <Heading level={3}>Add Expense</Heading>
        </Box>
        <Form onSubmit={handleSubmit} pad='small'>
          <Grid
            gap='small'
          >
            <Box pad='small'>
              <FormField label='Expense Category' htmlFor='select'>
                <Select
                  id='select'
                  name='expense_category'
                  required
                  value={expense_category}
                  {...expense_category}
                  onChange={handleSelects}
                  options={categoryOptions}
                />
              </FormField>
              <FormField
                label='Amount'
                name='expense_amount'
                required
                onChange={handleChange}
              />
              <FormField
                label='Date'
                name='date'
                required
                onChange={handleChange}
              />
              <FormField
                label='Purpose'
                name='purpose'
                onChange={handleChange}
              />
              <FormField
                label='Notes'
                name='notes'
                onChange={handleChange}
              />
            </Box>
          </Grid>
          <Button
            label='Submit'
            type='submit'
            value='submit'
            gap='small'
          />
          <Button
            label='Cancel'
            onClick={() => props.toggle()}
            gap='small'
          />
        </Form>
      </>
    )
  }
}


export default ExpenseForm