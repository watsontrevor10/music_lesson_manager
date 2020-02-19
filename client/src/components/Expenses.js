import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Heading, DataTable, Grid, Layer } from 'grommet'
import ExpenseForm from './ExpenseForm'

const Expenses = () => {
  const [expenses, setExpenses] = useState([])
  const [addExpense, setAddExpense] = useState(false)

  const toggleExpenseForm = () => {
    setAddExpense(!addExpense)
  }

  useEffect(() => {
    axios.get('/api/expenses')
      .then(res => {
        setExpenses(res.data)
      })
  }, [])

  const handleUpdateExpenses = () => {
    axios.get('/api/expenses')
      .then(res => {
        setExpenses(res.data)
        toggleExpenseForm()
      })
  }

  function showExpenseForm() {
    if (addExpense) {
      return (
        <Layer
          position='right'
          full='vertical'
          modal
          onClickOutside={toggleExpenseForm}
          onEsc={toggleExpenseForm}
        >
          <ExpenseForm updateExpense={handleUpdateExpenses} toggle={toggleExpenseForm} />
        </Layer>
      )
    } 
  }

  return (
    <>
      <Box>
        <Box>
          <Heading level={3}>Expenses</Heading>
          <Button
            label='Add Expense'
            onClick={toggleExpenseForm}
            gap='small'
          />

        </Box>
        <Box>
          <DataTable
            key={expenses.id}
            columns={[
              {
                property: 'expense_category',
                header: 'Expense Type',
              },
              {
                property: 'expense_amount',
                header: 'Amount',
              },
              {
                property: 'date',
                header: 'Date',
              },
              {
                property: 'purpose',
                header: 'Purpose',
              },
              {
                property: 'notes',
                header: 'Notes',
              },
            ]}
            data={expenses}
          />
        </Box>
      </Box>
      {showExpenseForm()}
    </>
  )
}

export default Expenses