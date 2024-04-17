import styled from "styled-components/macro";
import HomeCarouselImageItem from "../img/HomeCarouselImageItem.png";

export const DivContainerPageCarouselSC = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  align-content: center;
  grid-template-rows: max-content;
  grid-row-gap: 65px;
  height: calc(100vh - 100px);
  //border: 1px solid red;
  margin-top: 100px;
  background-color: #fbf8ff; ;
`;

export const DivBackColor = styled.div`
  //max-width: 1920px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: grid;
  //align-content: center;
`;
export const TitleTextSC = styled.div`
  font-family: "Poppins";
  font-weight: 700;
  font-size: 64px;
  user-select: none;
  @media (max-width: 768px) {
    font-size: 45px;
  }
  @media (max-width: 600px) {
    font-size: 35px;
  }
  @media (max-width: 480px) {
    font-size: 29px;
  }
  @media (max-width: 360px) {
    font-size: 26px;
  }
`;

export const DivCarouselMainSC = styled.div`
  max-width: 1420px;
  width: 100%;
  padding: 0px 0px 0px 0px;

  display: flex;
  align-items: center;
  @media (min-width: 1020px) {
    position: relative;
  }
`;

export const DivCarouselWindowSC = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  overflow: hidden;
  margin: 0 auto;
`;

export const DivCarouselContainerSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: max-content;
  align-items: center;
  justify-content: center;
  position: relative;
  max-width: 1600px;
`;

export const DivCarouselAllItemsSC = styled.div`
  transform: translateX(${(props) => props.carouselNumber * -482}px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  column-gap: 22px;
  padding: 0px 0px 0px 10px;
  transition: translate;
  transition-property: transform;
  transition-duration: 200ms;
  transition-timing-function: ease-in-out;
  /* @media (max-width: 1000px) {
    transform: translateX(${(props) => props.carouselNumber * -310}px);
  } */
`;

export const DivArrowBackgroundSC = styled.div`
  position: absolute;
  display: grid;
  align-items: center;
  justify-items: center;
  width: 50px;
  height: 50px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.11);
  border-radius: 100%;
  background-color: #ffffff;
  z-index: 1;
  font-size: 40px;
  padding: 5px;
  ${(p) => (p.arrow === "right" ? "right: 0;" : null)}/* ${(p) =>
    p.arrow === "left" ? "margin-left: -15px;" : null} */
`;

export const HomeCarouselItemSC = styled.div`
  display: grid;
  grid-template-rows: max-content;
  width: 457px;
  height: 627px;
  background: #ffffff;
  border-radius: 30px;
`;

export const DivImageItemSC = styled.div`
  display: grid;
  background: none;
  background-image: url(${HomeCarouselImageItem});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 457px;
  height: 342px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const GridItemInfoSC = styled.div`
  display: grid;
  grid-row-gap: 15px;
  padding: 30px 25px;
  grid-template-rows: max-content;
`;

export const DivTitleItemSC = styled.div`
  font-weight: 600;
  font-size: 24px;
  user-select: none;
`;

export const DivDescriptionItemSC = styled.div`
  line-height: 120%;
  font-weight: 400;
  font-size: 14px;
  user-select: none;
`;
