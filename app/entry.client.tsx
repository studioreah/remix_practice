import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'

import { AppThemeProvider } from '~/ui/themeProvider'

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
