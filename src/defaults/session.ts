import { KieraCachedSession } from '@/objects/session'

export const $DefaultSession = {
  cached: new KieraCachedSession({}),
  isAuthenticated: false,
  isLoaded: false
}
