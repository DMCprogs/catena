import styled from "styled-components/macro";
import Family from "../img/Family.png";
import WarningIcon from "../img/WarningIcon.svg";
import RightArrow from "../img/RightArrow.svg";
import DropUp from "../img/DropUp.svg";
import { MdOutlinePhotoCamera } from "react-icons/md";

export const GridBoxSC = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
`;
export const DivGagSC = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;
export const DivHZSC = styled.div`
  @media (max-width: 1000px) {
    display: none;
  }
`;

export const GridContentSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 6fr;
  grid-row-gap: 100px;
  margin-top: 50px;
  min-height: calc(100vh - 280px);
  width: 100%;
  margin-bottom: 180px;
  @media (max-width: 1000px) {
    grid-template-columns: 6fr;
  }
`;

export const GridLeftContainerSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-rows: max-content;
  grid-row-gap: 35px;
`;

export const TextTitleSC = styled.div`
  font-weight: 800;
  font-size: 54px;
  color: var(--purple-color);
  @media (max-width: 1000px) {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 480px) {
    font-size: 32px;
  }
  @media (max-width: 360px) {
    font-size: 30px;
  }
`;

export const TextDescriptionSC = styled.div`
  font-weight: 600;
  font-size: 28px;
  opacity: 75%;
  color: var(--purple-color);
  @media (max-width: 768px) {
    font-size: 22px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
  }
  @media (max-width: 375px) {
    font-size: 18px;
  }
`;

export const GridContentFormSC = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: max-content max-content max-content;
  grid-row-gap: 20px;
`;

export const InputTextSC = styled.input`
  /* @media (max-width: 1890px) {
    width: 83%;
  }
  @media (max-width: 720px) {
    width: 81%;
  }
  @media (max-width: 440px) {
    width: 77%;
  } */
  width: 83%;
  display: flex;
  //justify-content: space-between;
  background: var(--white-color);
  font-family: "Poppins";
  font-weight: 500;
  border: 2px solid var(--border-purple-opacity);
  justify-self: left;
  border-radius: 500px;
  padding: 18px 32px;
  color: var(--purple-opacity);
  font-size: 24px;
  /*   ${(p) => p.width && `width:${p.width};`}
  @media (max-width: 480px) {
    padding: 12px 15px;
  } */
  padding-right: 70px;
  /* ${(p) =>
    p.Disabled !== undefined ? `height:${p.Disabled};` : "::disabled: 18px;"} */
  :focus {
    border: 2px solid var(--red-color);
    outline: none;
  }
`;

export const GridFormRows = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: max-content max-content max-content max-content;
  grid-row-gap: 16px;
`;
export const GridFormColumns = styled.div`
  display: grid;
  width: 100%;
  grid-column-gap: 16px;
  grid-template-columns: 50% 50%;
  @media (max-width: 700px) {
    grid-template-columns: 100%;
  }
`;
export const InputTextAreaSC = styled.textarea`
  background: var(--white-color);
  font-family: "Poppins";

  font-weight: 500;
  border: 2px solid var(--border-purple-opacity);
  border-radius: 28px;
  padding: 18px 32px;
  font-size: 24px;
  color: var(--purple-opacity);
  min-height: 300px;
  resize: none;
  :focus {
    border: 2px solid var(--red-color);
    outline: none;
  }
  @media (max-width: 1890px) {
    width: 89%;
  }
  @media (max-width: 720px) {
    width: 88%;
  }
`;

export const GridTextRight = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 10px;
  // padding-right: 50px;
  @media (max-width: 768px) {
    padding-right: 30px;
  }
`;
export const TextRightSC = styled.div`
  font-weight: 600;
  font-size: 24px;
  color: var(--purple-color);
  @media (max-width: 768px) {
    font-size: 18px;
    align-content: center;
    align-items: center;
    align-self: center;
  }
  @media (max-width: 450px) {
    font-size: 16px;
    align-content: center;
    align-items: center;
    align-self: center;
  }
`;

export const GridRightColumnSC = styled.div`
  width: 100%;
  display: grid;
  justify-items: center;
  grid-template-rows: max-content;
  grid-row-gap: 25px;
  @media (max-width: 700px) {
    display: none;
  }
`;

export const GridRightColumn2SC = styled.div`
  display: none;
  @media (max-width: 700px) {
    display: grid;
    margin-top: 30px;
    width: 100%;
    justify-items: start;
    grid-template-rows: max-content;
    grid-row-gap: 25px;
  }
`;

export const DivImageSC = styled.div`
  display: grid;
  background: none;
  background-image: url(${({ photoUrl }) => photoUrl && `${photoUrl}`});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 250px;
  height: 250px;
  border-radius: 12px;
  position: relative;
  border-radius: 100%;
  cursor: pointer;
  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
`;

export const WarningIconSC = styled.div`
  background-image: url(${WarningIcon});
  background-repeat: no-repeat;
  background-position: center;

  background-size: cover;
  display: grid;
  position: relative;
  width: 25px;
  height: 25px;
  aspect-ratio: 1/1;
  cursor: pointer;
`;
export const DropDownSC = styled.div`
  display: ${({ SelectWarning }) =>
    SelectWarning === false ? "none" : "grid"};
  user-select: none;
  border-radius: 12px;

  background-image: url(${DropUp});
  justify-items: center;
  justify-content: center;
  background-repeat: no-repeat;
  position: absolute;
  justify-content: center;
  top: -75px;
  right: -75px;
  z-index: 1;
  width: 174px;
  height: 65px;
  -webkit-box-shadow: -1px 2px 8px 3px rgba(0, 0, 0, 0.21);
  -moz-box-shadow: -1px 2px 8px 3px rgba(0, 0, 0, 0.21);
  box-shadow: -1px 2px 8px 3px rgba(0, 0, 0, 0.12);
`;
export const DropDownTextSC = styled.div`
  align-self: flex-start;
  font-weight: 600;
  font-size: 11px;
  color: var(--purple-color);
  padding: 9px 18px;
  line-height: 130%;
`;

export const HideInputSC = styled.input`
  display: none;
`;

export const OverlayProfileImageTextSC = styled.p`
  color: white;
  visibility: hidden;
`;

export const OverlayProfileImgSC = styled.div`
  position: absolute;
  z-index: 5;
  width: 100%;
  height: 100%;
  visibility: hidden;
  transition: 0.2s;
  transition-timing-function: linear;
  &:hover {
    background: rgba(131, 131, 131, 0.697);

    color: white;
    font-weight: 600;
    font-size: 1.2rem;
    border-radius: 12px;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.33);
    text-indent: 0%;
    display: grid;
    justify-content: center;
    align-content: center;
  }
  &:hover ${OverlayProfileImageTextSC} {
    visibility: visible !important;
  }
`;

export const DivInnerPhotoInputSC = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  //border: 2px solid blue;
`;

export const IconImgImgSC = styled(MdOutlinePhotoCamera)`
  display: grid;
  font-size: 50px;
  justify-self: center;
  color: rgba(0, 0, 0, 0.33);
`;

export const H1SC = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.33);
  //border: 2px solid blue;
`;

export const DivIconRightArrowSC = styled.div`
  width: 24px;
  height: 24px;
  color: #fff;
  display: grid;
  justify-self: end;
  align-self: center;
  background-image: url(${RightArrow});
  background-position: center;
  background-repeat: no-repeat;
`;
