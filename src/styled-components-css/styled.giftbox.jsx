import styled from "styled-components/macro";
import dropdown from "../img/DropDown.svg";
import Plus from "../img/Plus.svg";
import Pen from "../img/Pen.svg";
import { Link } from "react-router-dom";
import { BiEdit } from "react-icons/bi";
export const DivBoxRowsGiftBoxSC = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  row-gap: 40px;
  grid-template-rows: max-content max-content max-content max-content;
  margin-top: 100px;
  margin-bottom: 10%;
  user-select: none;
`;

export const DivTitleGiftBoxSC = styled.div`
  width: 100%;
  height: 70px;
  font-style: normal;
  font-weight: 800;
  font-size: 54px;
  line-height: 130%;
  color: #3c0f74;
  display: grid;
  align-self: end;
  @media (max-width: 1024px) {
    font-size: 48px;
  }
  @media (max-width: 768px) {
    font-size: 40px;
  }
  @media (max-width: 540px) {
    font-size: 32px;
  }

  @media (max-width: 460px) {
    font-size: 28px;
  }
`;

export const DivColumnsButtonsSC = styled.div`
  gap: 20px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  max-width: 525px;
  height: 72px;
  align-self: end;
  justify-items: start;
`;

export const DivTextButtonSC = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 540px) {
    font-size: 17px;
  }
`;

export const DivTextButtonWhiteSC = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  flex: none;
  order: 0;
  flex-grow: 0;
  @media (max-width: 540px) {
    font-size: 16px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`;

export const ProductCardContainer = styled.div`
  display: grid;
  grid-template-rows: auto auto max-content auto;
  border-radius: 32px;
  border: 3px solid #c2b3d6;
  padding: 25px;
  align-items: end;
  @media (max-width: 400px) {
    padding: 12px;
  }
`;

export const DivProductImage = styled.div`
  display: grid;
  background: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 20px;
  filter: ${({ ItemSelect }) =>
    ItemSelect === false ? "grayscale(1);" : "grayscale(0);"};
  transition: 0.1s;

  background: linear-gradient(
    136.7deg,
    #c1b7ff 0%,
    #8000ff 97.21%,
    #840aff 97.21%
  );
  @media (max-width: 480px) {
    min-width: 138px;
    min-height: 138px;
  }
  @media (max-width: 400px) {
    min-width: auto;
    min-height: auto;
  }
`;

export const ProductCardName = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #3c0f74;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProductCardStoreName = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #6d4b97;
  text-align: center;
  justify-self: start;
`;

export const DivContainerColumnsProductsSC = styled.div`
  width: 100%;
  height: 100%;
  transition: 1s;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 48px;

  align-self: end;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 20px;
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ProductCardStoreName1 = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #6d4b97;
  text-align: center;
  justify-self: start;
`;

export const DivColumnsNameAndDDSC = styled.div`
  width: 100%;
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const DivBoxDropDownSC = styled.div`
  position: relative;
  width: 35px;
  height: 17px;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  align-self: end;
  justify-self: end;
  margin-right: 3px;
  cursor: pointer;
`;

export const DivContainerDDSC = styled.div`
  position: absolute;
  width: 163px;
  height: 41px;
  background: #ffffff;
  box-shadow: 0px 3px 19px rgba(0, 0, 0, 0.16);
  border-radius: 12px;
  border-radius: 15px;
  top: 15px;
  left: -76px;
  display: grid;
  //grid-template-rows: 40px 40px;
  row-gap: 10px;
  padding: 10px;
  display: grid;
  align-items: center;
  z-index: 10000000000;
  &:hover {
    background: #f3f3f3;
  }
`;

export const DivTextDDSC = styled.div`
  width: 100%;
  height: 17px;
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 124%;
`;

export const DivColumnContentButtonSC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  width: 100%;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  height: 35px;
  @media (max-width: 480px) {
  }
`;

export const LinkAddanHeirSC = styled(Link)`
  width: max-content;
  text-decoration: none;
`;

export const DivIconPlusSC = styled.div`
  background-image: url(${Plus});
  width: 24px;
  height: 24px;
  color: #fff;
  display: grid;
  justify-self: end;
  align-self: center;
`;

export const DivColumnContentButton1SC = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  width: 100%;
  height: 35px;
  column-gap: 10px;
`;

export const DivIconPenSC = styled(BiEdit)`
  width: 32px;
  height: 32px;
  display: grid;
  justify-self: end;
  align-self: center;
  background-repeat: no-repeat;
  @media (max-width: 480px) {
    display: none;
  }
`;
