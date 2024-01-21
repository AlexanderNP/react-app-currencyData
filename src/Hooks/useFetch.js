import { useEffect, useState } from "react";

export function useFetch() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await fetch('https://www.cbr-xml-daily.ru/latest.js')
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json()
        setLoading(false)
        setData(data)
      }
      catch(e) {
        setError(e)
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return [error, loading, data]

}