import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

// TODO: Maybe the router needs to provide where you are?
export async function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
