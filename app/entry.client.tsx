import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { AppThemeProvider } from 'app/core/theme'
import 'the-new-css-reset/css/reset.css'
import { globalStyles } from './ui'

// globalStyles()
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
