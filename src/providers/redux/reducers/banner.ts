import { Banner } from "core/interfaces/banner";
import types from "providers/redux/types";
import { IBanner } from "core/types/banner";

interface IBannerState {
  banner?: Banner;
  listBanner: Banner[];
}

const initialState: IBannerState = {
  listBanner: [],
};

export const bannerReducer = (state = initialState, action: IBanner) => {
  if (action.type === types.GET_LIST_BANNERS) {
    return {
      banners: action.payload.listBanner || [],
    };
  } else {
    return state;
  }
};
