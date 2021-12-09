import openCapacitorSite from "components/openCapacitorBrowser";
import { Application } from "core/interfaces/applications";
import { Session } from "core/types/session";
import { notification } from "antd";
import { Dispatch } from "redux";
import { setRouterBack } from "providers/redux/actions/route";

export const openApp = (
  app: Application,
  history: any,
  session: Session,
  dispatch: Dispatch<any>
) => {
  if (session) {
    if (app.internalApp) {
      history.push({
        pathname: `/tabs/appView`,
        state: { app: app },
      });
    } else {
      const urlWhitSession = `${app.applicationURL}?token=${session.userToken}`;
      openCapacitorSite(urlWhitSession || "");
    }
  } else {
    dispatch(setRouterBack("/tabs/services"));
    openNotification();
    history.push({
      pathname: `/tabs/login`,
      state: { app: app },
    });
  }
};

const openNotification = () => {
  notification.warning({
    message: "Inicio de sesión requerido",

    description: "Para acceder a esta servicio, primero debes iniciar sesión.",
    duration: 8,
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};
