import { Browser } from "@capacitor/browser";


const openCapacitorSite = async (url: string) => {
    console.log("open with capacitor")
    await Browser.open({ url: url });
};
export default openCapacitorSite