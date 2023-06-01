import type { AppLoadContext, EntryContext } from '@remix-run/cloudflare'
import { RemixServer } from '@remix-run/react'
import isbot from 'isbot'
import { renderToReadableStream, renderToString } from 'react-dom/server'

import { getCssText } from 'app/ui'

export default async function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext,
  loadContext: AppLoadContext
) {
  const body = await renderToReadableStream(
    <RemixServer context={remixContext} url={request.url} />,
    {
      signal: request.signal,
      onError(error: unknown) {
        console.error(error)
        responseStatusCode = 500
      },
    }
  )

  if (isbot(request.headers.get('user-agent'))) {
    await body.allReady
  }

  const markup = renderToString(
    <RemixServer context={remixContext} url={request.url} />
  ).replace(/<\/head>/, `<style id="stitches">${getCssText()}</style></head>`)

  responseHeaders.set('Content-Type', 'text/html')

  return new Response('<!DOCTYPE html>' + markup, {
    status: responseStatusCode,
    headers: {
      ...Object.fromEntries(responseHeaders),
      'Content-Type': 'text/html',
    },
  })
}
