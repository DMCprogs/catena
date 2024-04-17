import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const DivContainerSlidesSC = styled.div`
  width: 100%;
  //max-height: 1080px;
  display: grid;
  height: calc(100vh - 100px);
  margin-top: 100px;
  justify-items: center;
  //padding-top: 40px;
  grid-template-rows: 220px 861px;

  user-select: none;

  //border: 1px solid black;

  ${({ Color }) => Color && ` background: ${Color}`}// border: 1px solid red;
`;

export const DivTitleTextSC = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;

  /* identical to box height, or 77px */

  /* Зелёный */
  ${({ Color }) => Color && ` color: ${Color};`}
  user-select: none;
  @media (max-width: 1000px) {
    font-size: 48px;
  }
  @media (max-width: 660px) {
    font-size: 32px;
  }
  @media (max-width: 360px) {
    font-size: 28px;
  }
`;

export const DivBoxTitleAndPagesSC = styled.div`
  width: 100%;
  max-width: var(--max-width);
  height: max-content;
  display: grid;
  grid-template-rows: max-content max-content 550px max-content;
  align-items: end;
  justify-items: center;
  row-gap: 40px;
  //border: 1px solid blue;
`;

export const DivContentListSC = styled.div`
  height: max-content;
  width: 100%;
  //border: 1px solid black;
`;

export const DivBoxColumnsPagesSC = styled.div`
  width: 100%;
  height: 100%;
  //max-width: 960px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-items: end;
`;

export const DivBoxPageAndDotsSC = styled.div`
  cursor: pointer;
  width: 100%;
  //max-width: 212px;
  display: grid;
  grid-template-columns: 12px auto 12px;
  align-items: center;
`;

export const DivBoxPageAndDots1SC = styled.div`
  cursor: pointer;
  width: 100%;
  //max-width: 200px;
  display: grid;
  grid-template-columns: auto 12px;
  align-items: center;
`;

export const DivPage1SC = styled.div`
  width: 100%;
  //max-width: 188px;
  height: 2px;
  transition: 1s;
  background-color: ${({ isActive }) => isActive && `${isActive}`};
`;

export const DivProgressBarRowSC = styled.div`
  display: grid;
  grid-template-rows: max-content max-content;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  row-gap: 5px;
  justify-items: center;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const DivFractionBoxSC = styled.div`
  display: grid;
  margin-left: 17px;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  //justify-items: right;
  //grid-gap: 10%;
  width: 100%;
`;

export const SpanFractionSC = styled.div`
  ${({ display }) => (display ? `visibility: visible;` : `visibility: hidden;`)}
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 120%;
  display: grid;
  justify-content: right;

  ${({ Color }) => Color && ` color: ${Color};`}
  user-select: none;
`;

export const DivDotSC = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  transition: 3s;
  background-color: ${({ isActive }) => isActive && `${isActive}`};
`;

export const DivBoxContentColumnsSC = styled.div`
  width: 100%;
  height: 550px;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  justify-items: center;
  align-self: center;
  @media (max-width: 768px) {
    grid-template-columns: 100%;
    justify-items: center;
  }
`;

export const DivBoxLeftPenalSC = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivFotoSC = styled.img`
  max-width: 480px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  @media (max-width: 1500px) {
    width: 402px;
    height: 354px;
  }

  @media (max-width: 1200px) {
    width: 332px;
    height: 284px;
  }
`;

export const DivBoxRightPenalSC = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-rows: 117px 184px 48px;
  justify-content: center;

  @media (max-width: 1000px) {
    height: 400px;
    justify-items: center;
    align-content: center;
  }
`;

export const DivBoxTextNFTSC = styled.div`
  max-width: 698px;
  max-height: 77px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  display: grid;
  align-content: end;
  user-select: none;
  /* identical to box height, or 77px */

  /* Зелёный */
  color: #324934;
  @media (max-width: 1500px) {
    font-size: 40px;
  }
  @media (max-width: 1000px) {
    font-size: 48px;
  }
  @media (max-width: 660px) {
    font-size: 32px;
  }
  @media (max-width: 360px) {
    font-size: 28px;
  }
`;

export const DivBoxTextcCeateNFTSC = styled.div`
  max-width: 698px;
  max-height: 144px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  user-select: none;
  padding-left: 20px;
  /* or 48px */

  /* Зелёный */
  color: #324934;
  @media (max-width: 1500px) {
    font-size: 28px;
  }
  @media (max-width: 1000px) {
    font-size: 32px;
  }
  @media (max-width: 660px) {
    font-size: 24px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const DivBoxTextLinkSC = styled(Link)`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;
  user-select: none;
  /* identical to box height, or 48px */
  text-decoration-line: underline;

  /* Акцент */
  color: #f75784;
  max-width: 698px;
  max-height: 48px;
  width: 100%;
  height: 100%;
  @media (max-width: 1000px) {
    font-size: 32px;
  }
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 22px;
  }
  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const DivFoto1SC = styled.img`
  max-width: 450px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  @media (max-width: 1500px) {
    width: 402px;
    height: 354px;
  }

  @media (max-width: 1200px) {
    width: 332px;
    height: 284px;
  }
`;

export const DivBoxRightPenal1SC = styled.div`
  width: 100%;
  //height: 522px;
  display: grid;
  grid-template-rows: max-content max-content max-content;
  //margin-top: 50px;
  align-self: center;
  row-gap: 40px;
`;

export const DivBoxTextNFT1SC = styled.div`
  max-width: 698px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  display: grid;
  user-select: none;
  color: #3c0f74;
  @media (max-width: 1500px) {
    font-size: 40px;
  }
`;

export const DivFoto2SC = styled.img`
  max-width: 450px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  @media (max-width: 1500px) {
    width: 402px;
    height: 354px;
  }

  @media (max-width: 1200px) {
    width: 332px;
    height: 284px;
  }
`;

export const DivBoxText1NFTSC = styled.div`
  max-width: 698px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  display: grid;

  color: #7c2e44;
  @media (max-width: 1500px) {
    font-size: 40px;
  }
  user-select: none;
`;

export const DivBoxTextcCeate1NFTSC = styled.div`
  max-width: 698px;
  max-height: 144px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;

  /* or 48px */

  /* Зелёный */
  color: #7c2e44;
  @media (max-width: 1500px) {
    font-size: 28px;
  }
  user-select: none;
`;

export const DivBoxTextcCeate0NFTSC = styled.div`
  max-width: 698px;
  max-height: 144px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 120%;

  /* or 48px */

  /* Зелёный */
  color: #3c0f74;
  @media (max-width: 1500px) {
    font-size: 28px;
  }
  user-select: none;
`;

export const DivFoto3SC = styled.img`
  max-width: 450px;
  max-height: 450px;
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  @media (max-width: 1500px) {
    width: 316px;
    height: 412px;
  }

  @media (max-width: 1200px) {
    width: 246px;
    height: 342px;
  }
`;

export const DivBoxLeftPenal3SC = styled.div`
  width: 100%;
  height: 548px;
  display: grid;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const DivBoxTextNFT3SC = styled.div`
  max-width: 698px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  display: grid;

  color: #673c0a;
  @media (max-width: 1500px) {
    font-size: 40px;
  }
  user-select: none;
`;

export const DivBoxTextcCeate3NFTSC = styled.div`
  max-width: 698px;
  max-height: 144px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 120%;

  /* or 48px */

  /* Зелёный */
  color: #673c0a;
  @media (max-width: 1500px) {
    font-size: 28px;
  }
  user-select: none;
`;

export const DivBoxTextNFT4SC = styled.div`
  max-width: 698px;
  width: 100%;
  height: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 120%;
  display: grid;

  color: #1e5050;
  @media (max-width: 1500px) {
    font-size: 40px;
  }
  user-select: none;
`;

export const DivStepButtonSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 217px);
  width: max-content;
  column-gap: 24px;
  justify-items: center;
  @media (max-width: 450px) {
    grid-template-columns: repeat(2, 150px);
    column-gap: 14px;
  }
`;

export const ButtonStepSC = styled.button`
  text-decoration: none;
  border: none;
  height: 72px;
  width: 217px;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #fff;
  display: grid;
  justify-content: center;
  align-items: center;
  border-radius: 500px;
  background-color: ${({ bg }) => bg};
  opacity: ${({ disabled }) => (disabled ? "0.5" : "1")};
  cursor: pointer;
  @media (max-width: 1000px) {
    width: 225px;
  }
  @media (max-width: 480px) {
    width: 210px;
  }
  @media (max-width: 455px) {
    width: 150px;
  }
`;
