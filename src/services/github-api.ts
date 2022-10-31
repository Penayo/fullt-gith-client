import { useState, useEffect } from 'react'
import { AxiosError } from 'axios'
import axios from '../axios'
import { Branch } from '../models/Branch'
import { Commit } from '../models/Commit'
// Axios, AxiosError, Cancel, CancelToken, CanceledError, VERSION, all, default, isAxiosError, isCancel, spread, toFormData


function useGetBranch (key: number) {
  const [branches, setBranches] = useState<Branch[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AxiosError>()

  useEffect(() => {
    async function fetchData () {
      setLoading(true)
      try {
        const { data } = await axios.get<Branch[]>('github/branches?repository=fullt-repo-admin')
        setBranches(data)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [key])

  return [loading, branches, error]
}

function useGetCommits (key: number, branchName: string | undefined) {
  const [data, setData] = useState<Commit[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<AxiosError>()

  useEffect(() => {
    async function fetchData () {
      setLoading(true)
      try {
        const result = await axios.get<Commit[]>(`github/branches/${branchName}?repository=fullt-repo-admin`)
        setData(result.data)
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    if (branchName) {
      fetchData()
    }

  }, [key, branchName])

  return [loading, data, error]
}

export {
  useGetBranch,
  useGetCommits
}
