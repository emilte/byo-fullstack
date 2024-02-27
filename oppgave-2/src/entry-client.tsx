import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'

// TODO: How can we hydrate the root instead of creating it?
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
