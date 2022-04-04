import { makeApiUrl } from '@main/factories/http'
import { makeAuthorizeHttpClientDecorator } from '@main/factories/decorators'
import { LoadUserList } from '@domain/useCase'
import { RemoteLoadUserList } from '@data/useCase'


export const makeRemoteLoadUserList = (): LoadUserList =>
  new RemoteLoadUserList(makeApiUrl('/api/users?delay=3'), makeAuthorizeHttpClientDecorator())


