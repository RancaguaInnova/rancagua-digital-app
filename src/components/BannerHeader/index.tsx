import { Banner } from "core/interfaces/banner";
import { GetListBanners } from "providers/redux/actions/banner";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, HashRouter } from "react-router-dom";
import { CarouselStyled } from "./styles";

const BannerHeader = () => {
  const dispatch = useDispatch();
  const { banners } = useSelector((state: any) => state.banner);
  const listado: Banner[] = banners || [];

  useEffect(() => {
    const timer = setTimeout(() => dispatch(GetListBanners()), 10000);
    return () => clearTimeout(timer);
  });

  useEffect(() => {
    dispatch(GetListBanners());

    return () => {};
  }, [dispatch]);

  const props = {
    dots: true,
    infinite: true,
    speed: 2000,
  };
  return (
    <CarouselStyled autoplay {...props}>
      {listado.map((banner: Banner) => (
        <div key={banner.id}>
          <a href={banner.targetUrl} target={"_blank"}>
            <img src={banner.imageUrl} alt={""} width={"100%"} />
          </a>
        </div>
      ))}
    </CarouselStyled>
  );
};
export default BannerHeader;
