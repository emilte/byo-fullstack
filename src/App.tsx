import { useEffect, useState } from 'react'

export default function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/data')
      .then((res) => res.json())
      .then(setData)
  }, [])

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>From API:</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
