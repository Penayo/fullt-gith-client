import React, { useState, useEffect } from 'react'
import { useGetBranch } from '../services/github-api'

function Dashboard () {
  const [key, setKey] = useState(0)
  const [loading, data, error] = useGetBranch(key) ;

  useEffect(() => {
    console.log('Branches list', data)
  }, [data])

  useEffect(() => {
    console.log('Branches error', error)
  }, [error])

  return (
    <div>Dashboard Page</div>
  )
}

export default Dashboard
