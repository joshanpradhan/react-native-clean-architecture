import { HttpClient, HttpStatusCode, HttpMethod } from "@data/protocols/http";
import { User } from "@domain/useCase";
import { InvalidCredentialsError, UnexpectedError } from "@domain/errors";

export class RemoteAddUser implements User {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddUser.Model>
  ) {}
  async add(params: User.Params): Promise<User.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: HttpMethod.POST,
      body: params,
    });
    const remoteResponse: any = httpResponse.body || {};
    switch (httpResponse.statusCode) {
      case HttpStatusCode.success:
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

export namespace RemoteAddUser {
  export type Model = User.Model;
}
