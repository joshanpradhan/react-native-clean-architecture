import { HttpClient, HttpStatusCode, HttpMethod } from "@data/protocols/http";
import { Authentication } from "@domain/useCase";
import {
  InvalidCredentialsError,
  UnexpectedError,
} from "@domain/errors";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAuthentication.Model>
  ) {}
  async auth(params: Authentication.Params): Promise<Authentication.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: HttpMethod.POST,
      body: params,
    });
    console.log("params",params)
    const remoteResponse: any = httpResponse.body || {};
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteResponse;
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError(remoteResponse.error);
      case HttpStatusCode.badRequest:
        throw new InvalidCredentialsError(remoteResponse.error);
      default:
        throw new UnexpectedError(remoteResponse.error);
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model;
}
