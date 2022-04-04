import { makeApiUrl,makeAxiosHttpClient } from '@main/factories/http'
import { RemoteAuthentication } from '@data/useCase'
import { Authentication } from '@domain/useCase'

export const makeRemoteAuthentication = (): Authentication =>
  new RemoteAuthentication(makeApiUrl('/api/login'), makeAxiosHttpClient())
