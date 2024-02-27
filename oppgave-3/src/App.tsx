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

      {/** TODO: Make these links not reload the page */}
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/cats">cats</a>
        </li>
      </ul>

      {/** TODO: Show the relevant page, or 404 */}
    </div>
  )
}
