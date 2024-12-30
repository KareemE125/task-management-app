
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from 'react'
import axios from 'axios'

export const useFetch = (query: string, url: string) => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')
  
  useEffect(() => {
    const fetchData = async () => {
      setError('')
      if (!query) return
  
      setLoading(true)
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          if (err.response) {
            const errorDescription = err.response.data.error.message || err.message
            setError(`Server Error: ${err.response.status} - ${errorDescription}`)
          } else if (err.request) {
            setError('Network Error: No response received')
          } else {
            setError(`Error: ${err.message}`)
          }
        } else {
          setError('An unexpected error occurred')
        }
        setData(null)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return { data, loading, error }
}