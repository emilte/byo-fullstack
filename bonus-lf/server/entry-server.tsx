import { ServerUrlProvider } from '@swan-io/chicane'
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'

export async function render(url: string) {
  return renderToString(
    <StrictMode>
      <ServerUrlProvider value={url}>
        <App />
      </ServerUrlProvider>
    </StrictMode>,
  )
}
