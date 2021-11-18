import React from "react";
import { Link } from "react-router-dom";
import { CarouselStyled } from "./styles";

const Banner = () => {
  const props = {
    dots: true,
    infinite: true,
    speed: 2000,
  };
  return (
    <CarouselStyled autoplay {...props}>
      <div>
        <Link to="/tabs/services">
          <img
            alt=""
            src="https://firebasestorage.googleapis.com/v0/b/cdir-tickets.appspot.com/o/banner%2Fbanner.png?alt=media&token=8eec2c79-e71b-4dba-9044-819f7ad93b77"
          />
        </Link>
      </div>
    </CarouselStyled>
  );
};
export default Banner;
