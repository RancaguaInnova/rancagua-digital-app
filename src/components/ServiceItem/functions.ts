import openCapacitorSite from "components/openCapacitorBrowser";
import { Application } from "core/interfaces/applications";

export const openApp = (app: Application, history: any) => {
    if (app.internalApp) {
      history.push({
        pathname: `/tabs/appView`,
        state: { app: app },
      });
    } else {
      openCapacitorSite(app.applicationURL || "");
    }
  };
