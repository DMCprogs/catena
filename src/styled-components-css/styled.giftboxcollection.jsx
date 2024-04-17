import styled from "styled-components/macro";
import dropdown from "../img/DropDown.svg";
import { HiCheck } from "react-icons/hi";

export const DivBoxRowsGiftBoxSC = styled.div`
  width: 100%;
  height: fit-content;
  display: grid;
  grid-template-rows: 182px 132px 515px 503px;
  margin-bottom: 182px;
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
`;

export const DivColumnsButtonsSC = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  max-width: 525px;
  height: 72px;
  align-self: end;
  justify-items: end;
`;

export const DivTextButtonSC = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;

export const DivTextButtonWhiteSC = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #f75784;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const DivProductContent = styled.div`
max-width: 281px;
  display: grid;
  grid-template-rows: max-content;
  grid-row-gap: 10px;
`;
export const ProductCardContainer = styled.div`
  display: grid;
  max-width: 337px;
  max-height: 449px;
  grid-template-rows: max-content max-content;
  grid-row-gap: 25px;
  border-radius: 32px;
  border: ${({ ItemSelect }) =>
    ItemSelect === true
      ? "6px solid var(--purple-color);"
      : " 3px solid #c2b3d6;"};

border: ${({ select }) =>
    select === true
      ? "3px solid #c2b3d6;"
      : null};

border: ${({ select, ItemSelect }) =>
    select === true && ItemSelect === false
      ? "6px solid var(--purple-color);"
      : null};
  padding: 25px;
  padding-bottom:40px;
  align-items: end;
  position: relative;
  /* filter: ${({ ItemSelect }) =>
    ItemSelect === false ? "grayscale(1);" : "grayscale(0);"};
transition: 0.5s; */
  transition: 0.1s;
  /* transform: ${({ ItemSelect }) =>
    ItemSelect === true ? "scale(0.95);" : " scale(1);"}; */
  /* &:active {
    transform: scale(0.95);
  } */
`;

export const DivSelectedCard2 = styled.div`

  background: var(--purple-color);
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  position: absolute;
  top: -25px;
  right: -18px;
  z-index: 1;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  display: grid;
`;
export const DivSelectedCard = styled.div`

  background: var(--purple-color);
  align-items: center;
  justify-items: center;
  align-content: center;
  justify-content: center;
  position: absolute;
  top: -25px;
  right: -18px;
  z-index: 1;
  border-radius: 100px;
  width: 50px;
  height: 50px;
  display: ${({ ItemSelect }) => (ItemSelect === false ? "none;" : "grid;")};

  display: ${({ select }) =>
    select === true
      ? "none"
      : null};
`;

export const DivProductImage = styled.div`
max-width: 281px;
max-height: 281px;
height: 100%;
  display: grid;
  background: ${({hash}) => `url(${hash})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 20px;

  

  //background: linear-gradient(
  //  136.7deg,
  //  #c1b7ff 0%,
  //  #8000ff 97.21%,
  //  #840aff 97.21%
  //);
`;

export const ProductCardName = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  color: #3c0f74;
  height: 100%;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const ProductCardStoreName = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #6d4b97;
  justify-self: start;
`;

export const DivContainerColumnsProductsSC = styled.div`
  width: 100%;
  height: 100%;
  max-height: 455px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 24px;
  align-self: end;
`;

export const ProductCardStoreName1 = styled.h5`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #6d4b97;
  justify-self: start;
`;

export const DivColumnsNameAndDDSC = styled.div`
  width: 100%;
  height: 20px;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr max-content;
  column-gap: 5px;
`;

export const DivBoxDropDownSC = styled.div`
  position: relative;
  width: 23.5px;
  height: 10px;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  justify-self: end;
  margin-right: 3px;
  cursor: pointer;
`;
export const HiCheckSC = styled(HiCheck)`
  width: 25px;
  height: 25px;
  background-repeat: no-repeat;
`;

export const DivContainerDDSC = styled.div`
  position: absolute;
  width: 150px;
  height: 150px;
  background: #99edcbd6;
  border-radius: 15px;
  top: 15px;
  left: -65px;
  display: grid;
  grid-template-rows: 40px 40px;
`;

export const DivBorderSC = styled.div`
  width: 90%;
  height: 100%;
  border-bottom: 3px solid #38705a;
  display: grid;
  justify-self: center;
  align-self: start;
  text-align: center;
  align-items: end;
  color: #38705a;
  margin-top: 25px;
`;

export const DivTextDDSC = styled.div`
  width: 100%;
  height: 30px;
  display: grid;
  justify-self: center;
  align-self: end;
  align-content: end;
  text-align: center;
  align-items: end;
  color: #38705a;
  font-size: 14px;
  padding-bottom: 2px;
  &:hover {
    background: #92e6c4;
  }
`;

export const DivSelectSC = styled.div`
  &::after {
    border: 7px solid #c2b3d6;
  }
`;
