import { isDevelopmentMode } from 'configs'

const API_PROTOCOL = window.location.protocol
let API_HOST = global.window
  ? `${API_PROTOCOL}//${window.location.hostname}`
  : 'http://localhost'
let PORT = global.window ? window.location.port : ''
PORT = PORT ? `:${PORT}` : PORT

if (isDevelopmentMode) {
  API_HOST = process.env.REACT_APP_API_HOST
  PORT = process.env.REACT_APP_PORT
}

export const API_ROOT = `${API_HOST}${PORT}`
export const API_TIMEOUT = 30000
