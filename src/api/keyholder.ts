import Axios from 'axios'
import { Kiera } from '@/api/endpoints'
import { getSessionHeaders } from '@/utils/session'

export async function fetchRunningLocks() {
  const resp = await Axios(Kiera.Keyholder, {
    method: 'GET',
    headers: getSessionHeaders()
  })

  return resp.data
}
