import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Heading, DataTable, Grid } from 'grommet'
import ExpenseForm from './ExpenseForm'

const Expenses = () => {
  const [expenses, setExpenses] = useState([])

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
      })
  }

  return (
    <>
    <Grid
      columns={{
        count: 2, 
        size: 'auto', 
      }}
      gap='small'
    >
      <Box>
        <Box>
          <Heading level={3}>Expenses</Heading>
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
      <Box>
        <ExpenseForm updateExpense={handleUpdateExpenses} />
      </Box>
    </Grid>
    </>
  )
}

export default Expenses