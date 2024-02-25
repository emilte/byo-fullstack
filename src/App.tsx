import { Link } from '@swan-io/chicane'
import { useEffect, useState } from 'react'
import { match } from 'ts-pattern'
import Cats from './Cats'
import { Router } from './Router'

export default function App() {
  const [data, setData] = useState(null)

  const route = Router.useRoute(['Home', 'Cats'])

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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/cats">cats</Link>
        </li>
      </ul>

      {match(route)
        .with({ name: 'Home' }, () => <h1>Home</h1>)
        .with({ name: 'Cats' }, () => <Cats />)
        .otherwise(() => (
          <h1>404</h1>
        ))}
    </div>
  )
}
