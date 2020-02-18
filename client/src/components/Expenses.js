import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Box, } from 'grommet'

const Expenses = () => {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    axios.get('/api/expenses')
      .then(res => {
        setExpenses(res.data)
      })
  }, [])

  return (
    <>
      <h1>Expenses</h1>
    </>
  )
}

export default Expenses