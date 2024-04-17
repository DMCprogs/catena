import styled from "styled-components/macro";
import Present from "../img/Present.svg";
import Timer from "../img/Timer.svg";
import Eye from "../img/Eye.svg";
import RedPlus from "../img/RedPlus.svg";
import { Link } from "react-router-dom";
import { HiPlus } from "react-icons/hi";
export const DivColumnContentButton3SC = styled.div`
  display: grid;
  grid-template-columns: 5fr 1.5fr;
  width: 100%;
  height: 35px;
  align-items: center;
  align-content: center;
`;
export const DivAdaptiveForButtons = styled.div`
  display: grid;
  grid-template-columns: 152px 80px 40px;
  align-items: center;
  @media (max-width: 700px) {
    grid-template-columns: auto 39px 80px;
    display: grid;
  }
`;
export const DivSelectSC = styled.div`
  @media (max-width: 700px) {
    grid-column: 3;
    grid-row: 1;
  }
`;

export const DivIconPresentSC = styled.div`
  background-image: url(${Present});
  width: 27px;
  height: 30px;
  color: #fff;
  display: grid;
  justify-self: end;
  align-self: center;
`;

export const DivBoxRowsGiftBoxesSC = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  row-gap: 50px;
  grid-template-rows: max-content max-content max-content max-content;
  margin-top: 100px;

  user-select: none;
`;

export const DivContainerColumnsPresentsSC = styled.div`
  width: 100%;
  height: 100%;

  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 48px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const PresentCardContainer = styled.div`
  z-index: 0;
  display: grid;
  grid-template-rows: 12% 25% 5% 10% 10%;
  border-radius: 32px;
  grid-row-gap: 10px;
  align-items: start;
  aspect-ratio: 1/1;

  border: ${({ ItemSelect }) =>
    ItemSelect === true
      ? "6px solid var(--purple-color)"
      : " 3px solid #c2b3d6"};

  position: relative;
  /* &:active {
    transform: scale(0.95);
  } */
  transition: 0.1s;
  justify-items: center;
  //height: initial;
  //box-sizing: border-box;

`;

export const DivTextButtonGiftBoxesSC = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  display: grid;
  align-content: center;
`;

export const LinkGiftBoxesSC = styled(Link)`
  text-decoration: none;
  user-select: none;
  //max-height: 20px;
  //width: max-content;
`;

export const DivLinkGiftBoxesSC = styled.div`
  width: 100%;
  max-width: 211px;
  height: max-content;
  display: grid;
  grid-template-rows:  max-content max-content;
  grid-row-gap: 10px;
`;

export const DivPresentImage = styled.div`
  aspect-ratio: 1/1;
  width: 85px;
 
  transition: 0.1s;
  align-self: center;
  background: linear-gradient(
    136.7deg,
    #c1b7ff 0%,
    #8000ff 97.21%,
    #840aff 97.21%
  );
  border-radius: 100%;
  justify-self: center;
`;

export const PresentCardName = styled.div`
  width: 100%;
  max-width: 169px;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;

  /* identical to box height */
  text-align: center;

  /* Фиолетовый */
  color: #3c0f74;
  display: grid;
  justify-self: center;
`;

export const PresentCardStoreName = styled.div`
  width: 100%;
  max-width: 177px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  /* identical to box height */
  text-align: center;

  /* 75% фиолетовый */
  color: #6d4b97;
  justify-self: center;
`;

export const DivTextButtonGiftBoxesRedSC = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  flex: none;
  order: 0;
  flex-grow: 0;
  display: grid;
  align-content: center;
 
  transition: 0.1s;
`;

export const DivBowPresentSC = styled.div`
  aspect-ratio: 138/110;
  z-index: 100;
 
  transition: 0.1s;
  justify-self: center;
  align-self: flex-start;
  display: grid;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-size: 100%;
  width: 30%;
  margin-top: -45px;

  //border: 2px solid yellow;
`;

export const DivColumnTitleAndTimerSC = styled.div`
  width: 100%;
  height: 100%;
  max-height: 65px;
  display: grid;
  grid-template-columns: auto max-content max-content;
  align-items: center;
  grid-column-gap: 36px;
  @media (max-width: 1025px) {
    grid-column-gap: 6px;
  }
`;

export const DivBoxTimerSC = styled.div`
  width: 350px;
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;
  text-align: right;
  color: #3c0f74;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media (max-width: 700px) {
    display: none;
  }
`;
export const DivAutoWidthSC = styled.div`
  @media (min-width: 545px) {
    width: 285px;
  }
  @media (max-width: 544px) {
    width: 245px;
  }
`;
export const DivBoxTimer2SC = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 130%;
  text-align: right;
  color: #3c0f74;
  flex: none;
  order: 1;
  flex-grow: 0;
  @media (min-width: 700px) {
    display: none;
  }
  @media (max-width: 700px) {
    font-size: 32px;
    grid-column-start: 2;
    grid-row-start: 1;
  }
  @media (max-width: 600px) {
    font-size: 26px;
  }
  @media (max-width: 412px) {
    font-size: 24px;
  }
  @media (max-width: 390px) {
    grid-column-start: 1;
    grid-row-start: 1;
  }
`;

export const DivIconTimerSC = styled.div`
  width: 20px;
  height: 20px;
  display: grid;
  background-image: url(${Timer});
  background-repeat: no-repeat;
  align-self: center;
  justify-self: center;
`;

export const DivIconEyeSC = styled.div`
  width: 20px;
  height: 16px;
  display: grid;
  background-image: url(${Eye});
  background-repeat: no-repeat;
  align-self: center;
  justify-self: center;
`;

export const DivIconRedEyeSC = styled(HiPlus)`
  width: 22px;
  height: 22px;
  display: grid;
  background-repeat: no-repeat;
  align-self: center;
  justify-self: center;
 
  transition: 0.1s;
`;

export const DivBoxTextUnderbuttonSC = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: calc(100% - 430px);
  max-height: 16px;
  justify-items: end;

  @media (max-width: 1025px) {
    max-height: 70px;
    max-width: 1060px;
  }
  @media (max-width: 700px) {
    justify-content: space-between;
    grid-template-columns: auto auto;
  }
  @media (max-width: 390px) {
    grid-template-columns: auto auto;
    grid-template-rows: 1fr 1fr 1fr;
    justify-items: center;
  }
`;

export const DivTextUnderbuttonSC = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  max-width: 90px;
  max-height: 16px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 130%;
  color: #3c0f74;
  @media (max-width: 1025px) {
    max-width: 130px;
    max-height: 45px;
  }
  @media (max-width: 700px) {
    max-width: 130px;
    grid-column-start: 1;
    grid-row-start: 2;
  }
  @media (max-width: 390px) {
    max-width: 98px;
    grid-column-start: 1;
    grid-row-start: 3;
  }
`;

export const DivColumnContentButtonPresentSC = styled.div`
  display: grid;
  grid-template-columns: 4.5fr 1fr;
  width: 100%;
  height: 35px;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  column-gap: 10px;
`;

export const DivColumnsButtonsGiftboxesSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 152px 80px 40px;
  align-items: center;
  @media (max-width: 700px) {
    gap: 10px;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: none;
  }
`;
export const DivNoneBittonSC = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const DivNoneBitton2SC = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
  @media (max-width: 700px) {
    grid-column-start: 1;
    grid-row-start: 1;
  }
  @media (max-width: 390px) {
    grid-column-start: 1;
    grid-row-start: 2;
  }
`;
