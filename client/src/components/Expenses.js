import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, Button, Heading, DataTable, Layer } from 'grommet'
import ExpenseForm from './ExpenseForm'

const Expenses = () => {
  const [expenses, setExpenses] = useState([])
  const [expense, setExpense] = useState(null)
  const [expenseForm, setExpenseForm] = useState(false)

  const toggleExpenseForm = (e) => {
    setExpenseForm(!expenseForm)
  }

  const toggleEditForm = (e) => {
    setExpense(e)
    setExpenseForm(!expenseForm)
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

  const handleDelete = () => {
    axios.delete(`api/expenses/${expense.id}`)
      .then(res => {
        setExpenses(expenses.filter(exp => exp.id !== expense.id))
        toggleExpenseForm()
      })
  }

  function showExpenseForm() {
    if (expenseForm) {
      return (
        <Layer
          position='right'
          full='vertical'
          modal
          onClickOutside={toggleExpenseForm}
          onEsc={toggleExpenseForm}
        >
          <ExpenseForm 
            updateExpense={handleUpdateExpenses}
            toggle={toggleExpenseForm} 
            expense={expense} 
            deleteExpense={handleDelete}
          />
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
            sortable
            onClickRow={event => toggleEditForm(event.datum)}
          />
        </Box>
      </Box>
      {showExpenseForm()}
    </>
  )
}

export default Expenses