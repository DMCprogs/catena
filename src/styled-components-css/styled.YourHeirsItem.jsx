import styled from "styled-components/macro";
import dropdown from "../img/DropDown.svg";
import { HiCheck } from "react-icons/hi";
import EyeIcon from "../img/Eye.svg";

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

export const YourHeirsItemContainer = styled.div`
  display: grid;
  border-radius: 32px;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 25px;
  border: ${({ ItemSelect }) =>
    ItemSelect === true
      ? "6px solid var(--purple-color);"
      : " 3px solid #c2b3d6;"};
  padding: 25px;
  position: relative;
  transition: 0.1s;
  justify-content: center;

  /* &:active {
    transform: scale(0.95);
  } */
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
`;

export const DivYourHeirsImage = styled.div`
  display: grid;
  background: none;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  aspect-ratio: 1/1;
  border-radius: 100%;
  height: 170px;
  
  transition: 0.1s;

  background: linear-gradient(
    136.7deg,
    #c1b7ff 0%,
    #8000ff 97.21%,
    #840aff 97.21%
  );
`;

export const ProductYourHeirName = styled.h4`
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  color: #3c0f74;
  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

export const DivYourHeirsEmail = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  color: var(--purple-opacity);
  text-align: center;
  justify-self: start;
`;

export const DivYourHeirsDescription = styled.div`
  display: grid;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  font-size: 16px;
  color: #6d4b97;
  max-width: 460px;
  height: 100%;
  align-items: center;
`;

export const GridButtonsSC = styled.div`
  display: grid;
  grid-template-columns: repeat(2, max-content);
  grid-column-gap: 16px;
  height: 100%;
  align-items: end;
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
  line-height: 24px;
  color: #6d4b97;
  text-align: center;
  justify-self: start;
  padding-bottom: 20px;
`;

export const DivColumnsNameAndDDSC = styled.div`
  width: 100%;
  height: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const DivBoxDropDownSC = styled.div`
  position: relative;
  width: 22.5px;
  height: 12px;
  background-image: url(${dropdown});
  background-repeat: no-repeat;
  align-self: end;
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

export const GridContentSC = styled.div`
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-column-gap: 75px;
  height: 100%;
`;

export const DivSelectSC = styled.div`
  &::after {
    border: 7px solid #c2b3d6;
  }
`;

export const GridNameEmailSC = styled.div`
  display: grid;
  grid-template-rows: repeat(2, max-content);
  align-items: center;
  align-content: center;
  grid-row-gap: 5px;
  height: 100%;
`;

export const DivIconEyeSC = styled.div`
  background-image: url(${EyeIcon});
  background-repeat: no-repeat;
  width: 20px;
  height: 19px;
  display: grid;
  align-content: end;
`;
