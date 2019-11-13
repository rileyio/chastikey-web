import { KieraCachedSession } from '@/objects/session'

export function getSessionHeaders() {
  const fromStorage = localStorage.getItem('kiera-session')

  // No Session
  if (!fromStorage) {
    return new KieraCachedSession({})
  }

  return new KieraCachedSession(JSON.parse(fromStorage))
}

export function setSessionHeaders(username: string, session: string) {
  localStorage.setItem(
    'kiera-session',
    JSON.stringify({
      username,
      session
    })
  )
}
