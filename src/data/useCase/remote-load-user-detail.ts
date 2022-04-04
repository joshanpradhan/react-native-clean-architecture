import { HttpClient, HttpStatusCode,HttpMethod } from '@data/protocols/http'
import { UnexpectedError, AccessDeniedError } from '@domain/errors'
import { LoadUserDetail } from '@domain/useCase'
import { UserDetailModel } from '@domain/model'

export class RemoteLoadUserDetail implements LoadUserDetail {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadUserDetail.Model>
  ) {}

  async load (): Promise<LoadUserDetail.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: HttpMethod.GET
    })
    const remoteResponse: any = httpResponse.body || {}
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return remoteResponse
      case HttpStatusCode.forbidden: throw new AccessDeniedError()
      default: throw new UnexpectedError(remoteResponse)
    }
  }
}

export namespace RemoteLoadUserDetail {
  export type Model = UserDetailModel
}
