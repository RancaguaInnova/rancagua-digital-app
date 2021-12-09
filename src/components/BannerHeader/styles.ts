import { Carousel } from "antd";
import styled from "styled-components";

export const CarouselStyled = styled(Carousel)`
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: #ffffff;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 3px;
  backdrop-filter: blur(5px);
`;

export const DivBanner = styled.div`
  cursor: pointer;
`;
