import styled from "styled-components/macro";
import Logo from "../img/LogoCyberZen.svg";

export const DivFooterWrapSC = styled.div`
  height: 348px;
  justify-content: center;
  justify-items: center;
  background-color: #f0fff9;
  grid-row-gap: 30px;
  display: grid;
  width: 100vw;
  grid-template-rows: repeat(2, max-content);
  align-content: end;
  @media (max-width: 1000px) {
    grid-row-gap: 20px;
    height: 260px;
  }
  @media (max-width: 768px) {
    grid-row-gap: 10px;
    height: 200px;
  }
  @media (max-width: 480px) {
    height: 170px;
  }
`;

export const DivContainerFooterSC = styled.div`
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  height: 100%;

  // border:1px solid green;
  display: grid;
  //margin-top:45px;
  grid-template-rows: repeat(3, max-content);
  //align-content: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  gap: 45px;
  @media (max-width: 1000px) {
    gap: 25px;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
  @media (max-width: 768px) {
    gap: 20px;
  }
`;
export const DivFooterSocialsSC = styled.div`
  display: grid;
  grid-template-columns: repeat(8, auto);
  max-width: 610px;
  //border:1px solid RED;
  gap: 45px;
`;
export const DivFooterLinksSC = styled.div`
  display: flex;
  grid-template-columns: repeat(2, max-content);
  justify-content: space-between;
  grid-gap: 4vw;
  max-width: 850px;
  // border:1px solid RED;
`;
export const DivFooterMottoSC = styled.div`
  // border:1px solid RED;
  display: grid;
  justify-content: center;
  justify-items: center;
  gap: 30px;
  @media (max-width: 768px) {
    gap: 16px;
  }
`;
export const DivFooterRightsSC = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  background: #dbfff1;
  border-radius: 20px 20px 0px 0px;
  align-self: end;
  align-content: end;
  text-align: center;
  padding: 20px 55px;
  @media (max-width: 1000px) {
    padding: 16px 44px;
    font-size: 10px;
  }
  @media (max-width: 768px) {
    padding: 12px 27px;
    font-size: 8px;
  }
`;
export const DivSocialImgs = styled.div`
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  width: 40px;
  height: 40px;
`;
export const DivLinksPanelsSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  height: 40px;
  gap: 16px;
  // border:1px solid RED;
  height: fit-content;

  @media (max-width: 1000px) {
    gap: 16px;
  }
  @media (max-width: 768px) {
    gap: 13px;
  }
  @media (max-width: 480px) {
    gap: 4px;
  }
`;
export const DivLinkImgs = styled.div`
  background-image: ${({ Photo }) => Photo && `url(${Photo})`};
  background-position: center;
  background-repeat: no-repeat;
  align-self: center;
  width: 60px;
  height: 60px;
  background-size: 100%;
  aspect-ratio: 1/1;
  @media (max-width: 1000px) {
    width: 50px;
    height: 50px;
  }
  @media (max-width: 1000px) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
  }

  //border:1px solid RED;
`;
export const DivLinksPanelSC = styled.div`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  height: 100%;
  //border:1px solid RED;
  width: max-content;
  align-content: center;
  align-self: center;
`;
export const DivLinksLeftPanelSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  align-content: center;
`;
export const H1FooterText = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  /* or 19px */
  color: #000000;
  user-select: none;

  @media (max-width: 1000px) {
    font-size: 10px;
  }
  @media (max-width: 480px) {
    font-size: 7px;
  }
`;
export const H1MottoText = styled.p`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  color: #f65784;
  width: fit-content;
  //border:1px solid RED;
  display: grid;
  user-select: none;
  font-size: 24px;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
  grid-template-columns: max-content max-content;
  gap: 7px;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 8px;
  }
`;
export const H1MottoFirstWText = styled.p`
  width: fit-content;
  color: #3c0f74;
  //border:1px solid RED;
  user-select: none;
`;
export const H1FooterBottomTextRights = styled.h1`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height */
  color: #3c0f74;
  user-select: none;
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 8px;
    line-height: 8px;
  }
`;
export const DivMadeByBoxSC = styled.div`
height: 100%;
width: calc(100% - 40px);
	display: grid;
	grid-template-columns: max-content max-content;
	column-gap: 9px;
  align-content: center;
  justify-content: center;
	@media (max-width: 1000px) {
		column-gap: 4px;
	}

`;


export const DivMadeByLogoSC = styled.div`
background-image: url(${Logo});
    background-repeat: no-repeat;
    width: 48px;
    height: 50px;
    background-size: 200%;
    display: grid;
    background-position: center;
	cursor: pointer;
    @media (max-width: 1000px) {
      width: 38px;
    height: 40px;
  }
`;
export const GridTextMadeBySC = styled.div`
display: grid;
align-content: center;
`;

export const PTextMadeBySC = styled.p`
margin: 0;
font-family: 'Orbitron';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 18px;
justify-self: start;
color: #111;

@media (max-width: 768px) {
  font-size: 10px;
line-height: 12px;
  }
  @media (max-width: 480px) {
  font-size: 8px;
line-height: 10px;
  }
`;

export const PTextCompanySC = styled.p`
margin: 0;
font-family: 'Orbitron';
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;

color: #111;

@media (max-width: 768px) {
  font-size: 12px;
line-height: 14px;
  }

  @media (max-width: 480px) {
  font-size: 10px;
line-height: 12px;
  }
`;