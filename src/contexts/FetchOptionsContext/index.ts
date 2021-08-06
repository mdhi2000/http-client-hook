import React from 'react'
export default React.createContext<{
  baseUrl: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' // POST, PUT, DELETE, etc.
  headers: {}
  body?: string | FormData | Blob | BufferSource | URLSearchParams // string, FormData, Blob, BufferSource, or URLSearchParams
  referrer: string
  referrerPolicy:
    | 'no-referrer-when-downgrade'
    | 'no-referrer'
    | 'origin'
    | 'origin-when-cross-origin'
    | 'same-origin'
    | 'strict-origin'
    | 'strict-origin-when-cross-origin'
    | 'unsafe-url'
  mode: 'cors' | 'same-origin' | 'no-cors'
  credentials: 'same-origin' | 'omit' | 'include'
  cache:
    | 'default'
    | 'no-store'
    | 'reload'
    | 'no-cache'
    | 'force-cache'
    | 'only-if-cached'
  redirect: 'follow' | 'manual' | 'error'
  integrity: string
  keepalive: boolean
  signal?: AbortSignal
  window: typeof window | null
}>({
  baseUrl: '',
  method: 'GET', // POST, PUT, DELETE, etc.
  headers: {
    // the content type header value is usually auto-set
    // depending on the request body
    'Content-Type': 'text/plain;charset=UTF-8'
  },
  body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
  referrer: 'about:client', // or "" to send no Referer header,
  // or an url from the current origin
  referrerPolicy: 'no-referrer-when-downgrade', // no-referrer, origin, same-origin...
  mode: 'cors', // same-origin, no-cors
  credentials: 'same-origin', // omit, include
  cache: 'default', // no-store, reload, no-cache, force-cache, or only-if-cached
  redirect: 'follow', // manual, error
  integrity: '', // a hash, like "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController to abort request
  window: window
})
