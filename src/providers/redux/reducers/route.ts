import { IRoute } from "core/types/route";
import types from "providers/redux/types";

interface IRouteState {
  routeBack: String;
}

const initialState: IRouteState = {
  routeBack: "/tabs/home",
};

export const routeReducer = (state = initialState, action: IRoute) => {
  switch (action.type) {
    case types.SET_ROUTE_BACK:
      return {
        routeBack: action.payload.routeBack,
      };

    default:
      return state;
  }
};
