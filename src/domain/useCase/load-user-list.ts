import { UserModel } from "@domain/model";

export interface LoadUserList {
  loadAll: () => Promise<LoadUserList.Model[]>;
}

export namespace LoadUserList {
  export type Model = UserModel;
}
