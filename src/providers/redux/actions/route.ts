import types from "providers/redux/types";

export const setRouterBack = (routeBack: String) => {
  return {
    type: types.SET_ROUTE_BACK,
    payload: {
      routeBack: routeBack,
    },
  };
};
