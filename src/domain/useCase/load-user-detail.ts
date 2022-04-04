import { UserDetailModel } from "@domain/model";

export interface LoadUserDetail {
  load: () => Promise<LoadUserDetail.Model>;
}

export namespace LoadUserDetail {
  export type Model = UserDetailModel;
}
