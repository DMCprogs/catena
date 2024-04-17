import styled from "styled-components/macro";
import logoCatena from "../img/catena-logo.svg";
import { Link } from "react-router-dom";

export const DivBackNavBarSC = styled.div`
  height: 100px;
  backdrop-filter: blur(2px);

  background-color: ${({ isHome }) =>
 isHome
        ? `rgba(255, 255, 255, 0.7)`
      : `rgba(255, 255, 255, 0.06)`};

  //background-color: var(--mint-color);
  display: grid;
  align-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 2;
  left: 0px;
  top: 0;
  right: 0px;
  //border:1px solid black;
`;
export const DivBurgerCatalogSC = styled.div`
  display: none;
  @media (max-width: 768px) {
    cursor: pointer;
    display: grid;
    width: 26px;
    height: 21px;
    align-self: center;
    grid-template-rows: 1fr 1fr 1fr;
    grid-row-gap: 6px;
    justify-content: end;
  }
`;

export const ItemBurgerCatalogSC = styled.div`
  width: 26px;
  height: 3px;
  background: #3c0f74;
  border-radius: 73px;
  flex: none;
  order: 2;
  flex-grow: 0;
  justify-content: end;
`;

export const DivNavBarWrapSC = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  grid-template-columns: max-content max-content;
  column-gap: 30px;
  align-items: center;
`;

export const DivLogoBoxSC = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 10px;
  user-select: none;
`;

export const LogoCatenaSC = styled.div`
  background-image: url(${logoCatena});
  background-size: 100%;
  width: 62px;
  height: 62px;
`;

export const LogoTextSC = styled.h1`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  color: var(--purple-color);
  user-select: none;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const NavBarLinkSC = styled(Link)`
  text-decoration: none;
  width: max-content;
  height: max-content;
  user-select: none;
  color: var(--purple-color);
`;
export const ButtonLinkSC = styled.div`
  //text-decoration: none;
  width: max-content;
  height: max-content;
  user-select: none;
  color: #ffffff;
`;

export const LinkProfileSC = styled(Link)`
  text-decoration: none;
  width: 100%;
  //height: max-content;
  user-select: none;
  cursor: pointer;
`;

export const DivNavigationSC = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: max-content max-content max-content max-content max-content;
  align-items: center;
  justify-content: right;
  grid-column-gap: 42px;
  @media (max-width: 768px) {
    grid-template-columns: max-content max-content;
    grid-column-gap: 20px;
  }
  justify-items: end;
`;

export const DivNavPageBoxSC = styled.div`
  width: max-content;
  height: max-content;
  display: grid;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
  @media (max-width: 768px) {
    display: none;
  }
`;
export const DivNavPageBoxAdaptiveSC = styled(Link)`
  width: max-content;
  height: max-content;
  display: grid;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  font-size: 16px;
  line-height: 120%;
`;
export const DivButtonColumnSC = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: max-content max-content;
  justify-content: center;
  column-gap: 3px;
`;
export const DivNavPageLiSC = styled.li`
  //border: 1px solid red;
  width: fit-content;
`;
export const DivNavPageDroptownOptionsSC = styled(Link)`
  margin-left: 10px;
  //border: 1px solid yellow;
  user-select: none;
`;
