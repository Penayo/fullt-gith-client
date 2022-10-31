import { useState, useEffect } from 'react'
import { AxiosError } from 'axios'
import axios from '../axios'
// Axios, AxiosError, Cancel, CancelToken, CanceledError, VERSION, all, default, isAxiosError, isCancel, spread, toFormData


function useGetBranch (key: number) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData () {
      setLoading(true)
      try {
        const result = await axios.get('github/branches?repository=fullt-repo-admin')
        setData(result.data)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [key])

  return [loading, data, error]
}

function useGetCommits (key: number, branchName: string) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData () {
      setLoading(true)
      try {
        const result = await axios.get(`branches/${branchName}`)
        setData(result.data)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [key])

  return [loading, data, error]
}

export {
  useGetBranch,
  useGetCommits
}
