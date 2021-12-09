import { Banner } from "core/interfaces/banner";
import { withSession } from "hoc/withSession";
import { Session } from 'core/types/session'
import { GetListBanners } from "providers/redux/actions/banner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CarouselStyled, DivBanner } from "./styles";
import openCapacitorSite from "components/openCapacitorBrowser";
import { useHistory } from "react-router-dom";
import { notification } from "antd";
interface BannerHeaderProps {

  session: Session;
  sessionLoading: boolean;
}
const BannerHeader: React.FC<BannerHeaderProps> = ({ session, sessionLoading }) => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state: any) => state.banner);
  const listado: Banner[] = banners || [];

  let history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => dispatch(GetListBanners()), 10000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    dispatch(GetListBanners());

    return () => { };
  }, [dispatch]);

  const props = {
    dots: true,
    infinite: true,
    speed: 2000,
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

  const openBanner = (banner: Banner) => {


    if (session) {
      let urlBanner = banner.targetUrl.includes('?') ? banner.targetUrl + '&token=' + session.userToken : banner.targetUrl + '?token=' + session.userToken;
      openCapacitorSite(urlBanner);
    } else {
      openNotification();
      history.push('/tabs/login')
    }



  }
  return (
    <CarouselStyled autoplay {...props}>
      {listado.map((banner: Banner) => (
        <DivBanner key={banner.id} onClick={() => openBanner(banner)}>

          <img src={banner.imageUrl} alt={""} width={"100%"} />

        </DivBanner>
      ))}
    </CarouselStyled>
  );
};
export default withSession(BannerHeader);
