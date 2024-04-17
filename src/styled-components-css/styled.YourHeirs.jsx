import styled from "styled-components/macro";
import ImageIconWhite from "../img/ImageIconWhite.svg";
import IconPinkCart from "../img/IconPinkCart.svg";
import { Link } from "react-router-dom";

export const GridYourHeirsSettingsSC = styled.div`
  display: grid;
  grid-template-columns: 250px auto 140px 80px 40px;
  align-items: center;
  align-self: end;
`;

export const GridYourHeirsItemsSC = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-row-gap: 30px;
`;

export const DivTextButtonAddAnHeirSC = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 36px;
  color: #ffffff;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
