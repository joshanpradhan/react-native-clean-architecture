import { AddUserModel } from "@domain/model";

export interface User {
  add: (params: User.Params) => Promise<User.Model>;
}

export namespace User {
  export type Params = {
    name: string;
    job: string;
  };

  export type Model = AddUserModel;
}
