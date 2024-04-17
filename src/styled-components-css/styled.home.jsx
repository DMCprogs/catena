import styled from "styled-components/macro";
import { Link } from "react-router-dom";

import Fullpage, {
  FullPageSections,
  FullpageSection,
  FullpageNavigation,
} from "@ap.cx/react-fullpage";

export const DivFullPageSC = styled(Fullpage)``;

export const DivFullPageSectionsSC = styled(FullPageSections)``;

export const DivFullpageSectionSC = styled(FullpageSection)`
  position: relative;
`;

export const DivScrollPageSC = styled.div`
  margin: 0 auto;
  justify-content: center;
  height: 100%;
  width: 100%;
  //border: 2px solid black;
  background-color: var(--mint-color);
`;
export const VideoPosterSC = styled.video`
  z-index: 0;
  display: grid;
  width: 100%;
  height: auto;
  //position: absolute;
  top: 0;
  left: 0;
`;
export const DivHomeContentBoxSC = styled.div`
  height: calc(100vh - 100px);
  width: 90vw;
  //border: 2px solid yellow;
  display: grid;
  grid-template-columns: max-content max-content;
  max-width: var(--max-width);
  margin: 0 auto;
  // border:1px solid red;
  @media (max-width: 1050px) {
    margin: 0 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 100%;
  }
`;

export const AudioHomepageSC = styled.audio``;

export const DivScrollDownColumnsSC = styled.div`
  display: grid;
  ${({ positionAbsolute }) => positionAbsolute && "position: absolute;"}
  z-index: 1;
  grid-template-columns: max-content max-content;
  //border:1px solid red;
  height: fit-content;
  width: fit-content;
  align-items: center;
  gap: 16px;
  left: 200px;
  bottom: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivIntroTextBoxSC = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: max-content max-content max-content;
  row-gap: 50px;
  max-width: 700px;
  margin-top: 70px;
  //border: 2px solid RED;
  @media (max-width: 768px) {
    justify-items: center;
    row-gap: 20px;
    margin-top: 0px;
  }
`;
export const DivPhotoFirstFrameContainerSC = styled.div`
  display: grid;
  grid-template-rows: max-content;

  width: 120.69%;
  //border: 2px solid yellow;
  justify-items: end;
  @media (max-width: 1500px) {
    justify-items: start;
    padding-left: 20px;
  }
  @media (max-width: 1000px) {
    width: 100%;
  }
  @media (max-width: 860px) {
    align-content: center;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivPhotoFirstFrameContainer2SC = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: grid;
    width: 100%;
    grid-template-rows: max-content;
    max-width: 700px;
    //border: 2px solid RED;
    justify-items: center;
  }
`;

export const DivPhotoFirstFrameSC = styled.div`
  z-index: 0;
  display: grid;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  border-radius: 20px;
  width: 580px;
  height: 580px;
  margin-top: 60px;
  //border: 2px solid yellow;
  @media (max-width: 1400px) {
    width: 470px;
    height: 470px;
  }
  @media (max-width: 1000px) {
    width: 400px;
    height: 400px;
  }
  @media (max-width: 860px) {
    width: 300px;
    height: 300px;
  }
  @media (max-width: 768px) {
    width: 390px;
    height: 390px;
  }
  @media (max-width: 450px) {
    width: 320px;
    height: 320px;
  }
`;
export const DivBowSC = styled.div`
  z-index: 1;
  justify-self: center;
  align-self: flex-start;
  display: grid;
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-repeat: no-repeat;
  background-size: 100%;
  width: 200px;
  height: 160px;
  margin-top: -60px;
  //border: 2px solid yellow;
  @media (max-width: 1400px) {
    width: 150px;
    height: 123px;
  }
  @media (max-width: 768px) {
    margin-top: -50px;
  }
  @media (max-width: 440px) {
    width: 106px;
    height: 83px;
    margin-top: -35px;
  }
`;
export const QuoteHomeBoxSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  row-gap: 25px;
  @media (max-width: 768px) {
    row-gap: 15px;
  }
`;

export const TextHomeBoxSC = styled.p`
  font-style: normal;

  ${({ weight }) =>
    weight !== undefined ? `font-weight: ${weight};` : `font-weight: 600;`}
  ${({ size }) =>
    size !== undefined ? `font-size: ${size};` : `font-size: 28px;`}
  line-height: 130%;
  user-select: none;
  ${({ color }) => color && `color: ${color};`}
  @media (max-width: 1400px) {
    ${({ size }) =>
      size !== undefined ? `font-size: ${size};` : `font-size: 22px;`}
    width: 100%;
    max-width: 470px;
  }
  @media (max-width: 1400px) {
    ${({ size }) =>
      size !== undefined ? `font-size: ${size};` : `font-size: 18px;`}
    max-width: 400px;
  }
  @media (max-width: 768px) {
    text-align: center;
    max-width: 472px;
    font-size: 20px;
  }
`;

export const LinkHomeBoxSC = styled(Link)`
  width: max-content;
  height: max-content;
  text-decoration: none;
`;

export const TextHomeScrollDownSC = styled.p`
  font-style: normal;
  ${({ weight }) =>
    weight !== undefined ? `font-weight: ${weight};` : `font-weight: 600;`}
  ${({ size }) =>
    size !== undefined ? `font-size: ${size};` : `font-size: 28px;`}
  line-height: 130%;
  margin-bottom: 15px;
`;

export const TitleHomeBoxSC = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 130%;
  user-select: none;
  /* or 70px */
  //letter-spacing: -0.125em;
  @media (max-width: 1400px) {
    width: 100%;
    max-width: 470px;
    height: 110px;
    font-size: 42px;
  }
  @media (max-width: 1000px) {
    font-size: 34px;
    max-width: 400px;
  }
  @media (max-width: 768px) {
    text-align: center;
    font-size: 42px;
    max-width: 472px;
  }
  @media (max-width: 450px) {
    text-align: center;
    font-size: 32px;
    max-width: 440px;
    height: 80px;
  }
`;

export const DivLinkSoundBoxSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 35px;
  @media (max-width: 768px) {
    justify-items: center;
    grid-template-columns: 100%;
  }
`;

export const DivSoundBoxSC = styled.button`
  display: grid;
  grid-template-columns: max-content max-content;
  //align-items: center;
  column-gap: 10px;
  max-height: 15px;
  //border:1px solid red;
  align-items: flex-end;
  user-select: none;
  cursor: pointer;
  background: none;
  border: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivSoundBox1SC = styled.button`
  display: grid;
  grid-template-columns: max-content max-content;
  //align-items: center;
  column-gap: 10px;
  max-height: 15px;
  //border:1px solid red;
  align-items: flex-end;
  user-select: none;
  cursor: pointer;
  background: none;
  border: none;
`;

export const DivTempSC = styled.div`
  width: 100px;
  height: 100px;
  background: ${({ bg }) => bg};
`;
