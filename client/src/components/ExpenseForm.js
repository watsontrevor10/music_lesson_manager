import React, { useState, useEffect } from 'react'
import axios from 'axios'
import useFormInput from '../hooks/useFormInput'
import { Box, Button, Form, FormField, Heading, Grid, Select, MaskedInput } from 'grommet'

const ExpenseForm = (props) => {
  const { values, setValues, handleChange, handleSubmit, handleSelects } = useFormInput(submit)
  const [expense, setExpense] = useState(props.expense ? props.expense : null)
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
          setExpense(null)
        })
    } else {
      axios.post('/api/expenses', newExpense)
        .then(res => {
          props.updateExpense()
          setValues({})
        })
    }
  }

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
              onChange={handleChange}
            >
              <MaskedInput
                mask={[
                  {
                    length: [1, 2],
                    options: Array.from({ length: 12 }, (v, k) => k + 1),
                    regexp: /^1[0,1-2]$|^0?[1-9]$|^0$/,
                    placeholder: "mm"
                  },
                  { fixed: "/" },
                  {
                    length: [1, 2],
                    options: Array.from(
                      {
                        length: daysInMonth(parseInt(value.split("/")[0], 10))
                      },
                      (v, k) => k + 1
                    ),
                    regexp: /^[1-2][0-9]$|^3[0-1]$|^0?[1-9]$|^0$/,
                    placeholder: "dd"
                  },
                  { fixed: "/" },
                  {
                    length: 4,
                    options: Array.from({ length: 100 }, (v, k) => 2019 - k),
                    regexp: /^[1-2]$|^19$|^20$|^19[0-9]$|^20[0-9]$|^19[0-9][0-9]$|^20[0-9][0-9]$/,
                    placeholder: "yyyy"
                  }
                ]}
              />
            </FormField>
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
        />
      </Form>
    </>
  )
}


export default ExpenseForm