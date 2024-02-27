import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

export async function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
