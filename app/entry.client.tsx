import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import 'the-new-css-reset/css/reset.css'

import { AppThemeProvider } from 'app/core/theme'

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <AppThemeProvider>
        <RemixBrowser />
      </AppThemeProvider>
    </StrictMode>
  )
})
