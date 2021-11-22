import { Banner } from "../interfaces/banner";

export interface IPayload {
  listBanner: Banner[];
  banner: Banner;
}

export interface IBanner {
  type: any;
  payload: IPayload;
}
