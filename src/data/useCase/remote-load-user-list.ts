import { HttpClient, HttpStatusCode, HttpMethod } from "@data/protocols/http";
import { UnexpectedError, AccessDeniedError } from "@domain/errors";
import { LoadUserList } from "@domain/useCase";
import { UserModel } from "@domain/model";

export class RemoteLoadUserList implements LoadUserList {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteLoadUserList.Model[]>
  ) {}

  async loadAll(): Promise<LoadUserList.Model[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: HttpMethod.GET,
    });
    const remoteResponse: any = httpResponse.body || [];
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteResponse;
      case HttpStatusCode.noContent:
        return [];
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError(remoteResponse);
    }
  }
}

export namespace RemoteLoadUserList {
  export type Model = UserModel;
}
