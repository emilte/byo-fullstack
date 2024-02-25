import App from '@app/App'
import { ServerUrlProvider } from '@swan-io/chicane'
import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'

export function render(url: string) {
  return renderToString(
    <StrictMode>
      <ServerUrlProvider value={url}>
        <App />
      </ServerUrlProvider>
    </StrictMode>,
  )
}
