import React from 'react'
import FetchOptionsContext from '../../contexts/FetchOptionsContext'

interface Props {
  baseUrl: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' // POST, PUT, DELETE, etc.
  headers?: {}
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
  children: React.ReactNode
}

const RequestProvider = (props: Props) => {
  return (
    <FetchOptionsContext.Provider value={props}>
      {props.children}
    </FetchOptionsContext.Provider>
  )
}

export default RequestProvider
