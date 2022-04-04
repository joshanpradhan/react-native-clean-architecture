import { makeApiUrl } from '@main/factories/http'
import { makeAuthorizeHttpClientDecorator } from '@main/factories/decorators'
import { LoadUserDetail } from '@domain/useCase'
import { RemoteLoadUserDetail } from '@data/useCase'


export const makeRemoteLoadUserDetail =  (id: string): LoadUserDetail =>
  new RemoteLoadUserDetail(makeApiUrl(`/api/users/${id}`), makeAuthorizeHttpClientDecorator())


