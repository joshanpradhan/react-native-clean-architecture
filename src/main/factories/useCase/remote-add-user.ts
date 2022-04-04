import { makeApiUrl } from "@main/factories/http";
import { makeAuthorizeHttpClientDecorator } from "@main/factories/decorators";
import { RemoteAddUser } from "@data/useCase";
import { User } from "@domain/useCase";

export const makeRemoteAddUser = (): User =>
  new RemoteAddUser(
    makeApiUrl("/api/users"),
    makeAuthorizeHttpClientDecorator()
  );
