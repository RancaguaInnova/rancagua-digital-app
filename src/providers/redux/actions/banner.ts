import { Dispatch } from "redux";
import types from "providers/redux/types";
import axios from "axios";
import { url } from "providers/urlprovider";
import { Banner } from "core/interfaces/banner";

axios.defaults.baseURL = url;

export const GetListBanners = () => {
  return async (dispach: Dispatch) => {
    try {
      let banners: Banner[] = [];
      const { data, status } = await axios.get(`/city/banners`);
      if (status === 200) {
        banners = data;
        dispach(bannerList(banners));
      } else {
        console.log("status banner get", status);
      }
    } catch (error) {
      console.log("llego al error");
      console.log(error);
    }
  };
};

export const bannerList = (banners: Banner[]) => {
  return {
    type: types.GET_LIST_BANNERS,
    payload: {
      listBanner: banners,
    },
  };
};
